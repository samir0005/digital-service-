import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';

const app = express();
const PORT = 3000;
const ADMIN_SECRET = 'admin2026';
const DATA_DIR = path.resolve(process.cwd(), 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

app.use(express.json());

// Ensure data folder and storage file exist
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(LEADS_FILE)) {
  const seedLeads = [
    {
      id: 'lead-101',
      name: 'David Tremblay',
      businessName: 'Laurentian Craft Distillers',
      email: 'david@laurentiancraft.ca',
      phone: '(514) 555-0182',
      website: 'https://laurentiancraft.ca',
      service: 'Shopify E-commerce',
      budget: 'C$2,000–3,000',
      notes: 'Looking to rebuild our direct-to-consumer store ahead of Q4. Need bilingual support and clean mobile checkout.',
      source: 'contact_form',
      createdAt: new Date().toISOString(),
      status: 'new'
    }
  ];
  fs.writeFileSync(LEADS_FILE, JSON.stringify(seedLeads, null, 2));
}

function getStoredLeads() {
  try {
    if (!fs.existsSync(LEADS_FILE)) return [];
    return JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

// 1. Public API Endpoint: Save incoming discovery lead to server disk
app.post('/api/leads', (req: Request, res: Response) => {
  try {
    const leads = getStoredLeads();
    const newLead = {
      id: req.body.id || `lead-${Date.now()}`,
      createdAt: req.body.createdAt || new Date().toISOString(),
      name: req.body.name || 'Anonymous',
      businessName: req.body.businessName || '',
      email: req.body.email || '',
      phone: req.body.phone || '',
      website: req.body.website || '',
      service: req.body.service || 'Website Design',
      budget: req.body.budget || 'Custom Scope',
      notes: req.body.notes || '',
      source: req.body.source || 'website',
      status: 'new'
    };

    leads.unshift(newLead);
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
    console.log(`[BACKEND LEAD RECEIVED] ${newLead.name} | ${newLead.email} | Service: ${newLead.service}`);

    return res.status(200).json({ success: true, lead: newLead });
  } catch (error) {
    console.error('Error saving lead on backend:', error);
    return res.status(500).json({ success: false, error: 'Failed to record lead' });
  }
});

// 2. Protected Backend API: Fetch leads (requires secret admin key)
app.get('/api/admin/leads', (req: Request, res: Response) => {
  const key = req.query.key || req.headers['x-admin-key'];
  if (key !== ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized: Invalid Admin Key' });
  }
  const leads = getStoredLeads();
  return res.json({ success: true, count: leads.length, leads });
});

// 3. Protected Backend API: Export CSV directly
app.get('/api/admin/export-csv', (req: Request, res: Response) => {
  const key = req.query.key || req.headers['x-admin-key'];
  if (key !== ADMIN_SECRET) {
    return res.status(401).send('Unauthorized');
  }

  const leads = getStoredLeads();
  const headers = ['ID', 'Date', 'Name', 'Business', 'Email', 'Phone', 'Service', 'Budget', 'Status', 'Notes'];
  const rows = leads.map((l: any) => [
    l.id,
    new Date(l.createdAt).toLocaleDateString(),
    `"${(l.name || '').replace(/"/g, '""')}"`,
    `"${(l.businessName || '').replace(/"/g, '""')}"`,
    l.email || '',
    l.phone || '',
    `"${(l.service || '').replace(/"/g, '""')}"`,
    `"${(l.budget || '').replace(/"/g, '""')}"`,
    l.status || 'new',
    `"${(l.notes || '').replace(/"/g, '""')}"`
  ]);

  const csv = [headers.join(','), ...rows.map((r: any) => r.join(','))].join('\n');
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename=northform-leads-${new Date().toISOString().slice(0, 10)}.csv`);
  return res.send(csv);
});

// 4. Standalone Protected Admin Dashboard Route at /admin (Accessible only by business owner)
app.get('/admin', (req: Request, res: Response) => {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Northform Studio — Private Backend Leads Hub</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&family=JetBrains+Mono:wght@400;600&display=swap" rel="stylesheet">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background: #090A0D;
      color: #F5F6F8;
      min-height: 100vh;
      padding: 24px;
    }
    .container { max-width: 1200px; margin: 0 auto; }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 24px;
      border-bottom: 1px solid #1E2330;
      margin-bottom: 24px;
    }
    .header h1 { font-size: 22px; font-weight: 700; color: #fff; }
    .header .tag { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #60A5FA; text-transform: uppercase; }
    .btn {
      background: #2563EB;
      color: #ffffff;
      font-weight: 600;
      padding: 10px 18px;
      border-radius: 10px;
      text-decoration: none;
      font-size: 13px;
      border: none;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .btn:hover { background: #1D4ED8; }
    .auth-box {
      max-width: 400px;
      margin: 80px auto;
      background: #12141A;
      border: 1px solid #222632;
      border-radius: 16px;
      padding: 32px;
      text-align: center;
    }
    input[type="password"] {
      width: 100%;
      padding: 12px 16px;
      margin: 16px 0;
      background: #090A0D;
      border: 1px solid #2B3040;
      border-radius: 10px;
      color: #fff;
      font-size: 14px;
    }
    input[type="password"]:focus { outline: none; border-color: #3B82F6; }
    .lead-card {
      background: #12141A;
      border: 1px solid #222632;
      border-radius: 14px;
      padding: 20px;
      margin-bottom: 14px;
      display: grid;
      grid-template-columns: 2fr 1.5fr 2fr 1fr;
      gap: 16px;
      align-items: center;
    }
    .lead-card:hover { border-color: #2F3648; }
    .lead-name { font-weight: 700; font-size: 16px; color: #fff; }
    .lead-sub { font-size: 12px; color: #8F95A5; margin-top: 2px; }
    .lead-contact a { color: #60A5FA; text-decoration: none; display: block; font-size: 13px; margin-bottom: 4px; }
    .lead-contact a:hover { text-decoration: underline; }
    .lead-notes { font-size: 12px; color: #BDC2CE; line-height: 1.5; background: #0E1015; padding: 10px; border-radius: 8px; border: 1px solid #1E2330; }
    .badge {
      display: inline-block;
      padding: 4px 8px;
      border-radius: 6px;
      font-size: 10px;
      font-family: 'JetBrains Mono', monospace;
      font-weight: 600;
      background: rgba(59, 130, 246, 0.12);
      color: #93C5FD;
      border: 1px solid rgba(59, 130, 246, 0.25);
    }
    @media (max-width: 800px) {
      .lead-card { grid-template-columns: 1fr; }
    }
  </style>
</head>
<body>
  <div class="container">
    <div id="authPanel" class="auth-box">
      <span class="tag">Private Backend Access</span>
      <h2 style="margin: 8px 0 16px; font-size: 20px;">Owner Verification</h2>
      <p style="font-size: 13px; color: #8F95A5;">Enter your Studio Passcode to view your discovery call leads.</p>
      <input type="password" id="passInput" placeholder="Enter Admin Passcode (admin2026)">
      <button class="btn" style="width: 100%; justify-content: center;" onclick="verifyPass()">Unlock Leads Dashboard</button>
      <p id="err" style="color: #ff6b6b; font-size: 12px; margin-top: 12px; display: none;">Invalid Passcode</p>
    </div>

    <div id="dashboard" style="display: none;">
      <div class="header">
        <div>
          <span class="tag">Private Backend Portal · Not Visible to Public</span>
          <h1>Discovery Call Inquiries</h1>
        </div>
        <div style="display: flex; gap: 10px;">
          <a id="exportBtn" href="#" class="btn">Download CSV</a>
          <button onclick="logout()" class="btn" style="background: #181B24; color: #fff; border: 1px solid #2B3040;">Lock</button>
        </div>
      </div>
      <div id="leadsList">Loading leads...</div>
    </div>
  </div>

  <script>
    const correctKey = '${ADMIN_SECRET}';
    function verifyPass() {
      const val = document.getElementById('passInput').value;
      if (val === correctKey) {
        sessionStorage.setItem('nf_admin_auth', val);
        showDashboard(val);
      } else {
        document.getElementById('err').style.display = 'block';
      }
    }
    function logout() {
      sessionStorage.removeItem('nf_admin_auth');
      location.reload();
    }
    async function showDashboard(key) {
      document.getElementById('authPanel').style.display = 'none';
      document.getElementById('dashboard').style.display = 'block';
      document.getElementById('exportBtn').href = '/api/admin/export-csv?key=' + encodeURIComponent(key);

      try {
        const res = await fetch('/api/admin/leads?key=' + encodeURIComponent(key));
        const data = await res.json();
        const list = document.getElementById('leadsList');
        if (!data.leads || data.leads.length === 0) {
          list.innerHTML = '<p style="color: #8F95A5; text-align: center; padding: 40px;">No leads received yet.</p>';
          return;
        }

        list.innerHTML = data.leads.map(l => \`
          <div class="lead-card">
            <div>
              <div class="lead-name">\${escapeHtml(l.name)}</div>
              <div class="lead-sub">\${escapeHtml(l.businessName || 'Independent')} · \${new Date(l.createdAt).toLocaleDateString()}</div>
              <div style="margin-top: 8px;"><span class="badge">\${escapeHtml(l.service)}</span></div>
            </div>
            <div class="lead-contact">
              <a href="mailto:\${escapeHtml(l.email)}">✉ \${escapeHtml(l.email)}</a>
              \${l.phone ? \`<a href="tel:\${escapeHtml(l.phone)}">☎ \${escapeHtml(l.phone)}</a>\` : '<span style="color:#555;font-size:12px;">No phone provided</span>'}
              \${l.website ? \`<a href="\${escapeHtml(l.website)}" target="_blank" style="color:#8F95A5;">🌐 \${escapeHtml(l.website)}</a>\` : ''}
            </div>
            <div class="lead-notes">
              <strong style="color: #60A5FA; display: block; margin-bottom: 2px;">Brief / Scope:</strong>
              \${escapeHtml(l.notes || 'No project description entered')}
            </div>
            <div style="text-align: right;">
              <span style="font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #fff; font-weight: 600;">\${escapeHtml(l.budget || 'Custom')}</span>
            </div>
          </div>
        \`).join('');
      } catch (e) {
        document.getElementById('leadsList').innerHTML = '<p style="color: red;">Failed to load leads from backend.</p>';
      }
    }
    function escapeHtml(str) {
      if (!str) return '';
      return String(str).replace(/[&<>"']/g, s => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[s]);
    }
    const saved = sessionStorage.getItem('nf_admin_auth');
    if (saved === correctKey) {
      showDashboard(saved);
    }
  </script>
</body>
</html>`;
  res.send(html);
});

async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static('dist'));
    app.get('*', (req: Request, res: Response) => {
      res.sendFile(path.resolve('dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend server active on http://0.0.0.0:${PORT}`);
    console.log(`Private Admin Leads Portal available at http://0.0.0.0:${PORT}/admin (Passcode: ${ADMIN_SECRET})`);
  });
}

startServer();
