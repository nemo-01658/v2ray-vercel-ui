const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="si">
    <head>
      <meta charset="utf-8">
      <title>V2Ray Config Generator</title>
      <style>
        body { font-family: Arial; background: #111; color: #0f0; padding: 20px; }
        input, button { padding: 12px; margin: 8px 0; width: 100%; max-width: 500px; }
        button { background: #0f0; color: black; font-weight: bold; }
        pre { background: #222; padding: 15px; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <h1>VLESS + WS + TLS Config Generator</h1>
      
      <input type="text" id="domain" placeholder="Vercel Domain (e.g. yourproject.vercel.app)" value=""><br>
      <input type="text" id="uuid" placeholder="UUID" value="de04add9-5c68-8bab-950c-08cd5320df18"><br>
      <input type="text" id="path" placeholder="Path" value="/vless"><br><br>
      
      <button onclick="generateConfig()">Generate Config</button>
      
      <pre id="output" style="margin-top:20px;"></pre>

      <script>
        function generateConfig() {
          const domain = document.getElementById('domain').value.trim() || 'your-domain.vercel.app';
          const uuid = document.getElementById('uuid').value.trim();
          const path = document.getElementById('path').value.trim() || '/vless';

          const link = `vless://${uuid}@${domain}:443?encryption=none&security=tls&type=ws&host=${domain}&path=${encodeURIComponent(path)}#VLESS-WS-TLS-Vercel`;

          document.getElementById('output').textContent = link;
        }
      </script>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Server running');
});
