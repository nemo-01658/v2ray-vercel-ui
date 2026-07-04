const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>V2Ray VLESS WS TLS Config Generator</title>
      <style>
        body { font-family: Arial; margin: 20px; background: #0f0f0f; color: #0f0; }
        input, button { padding: 10px; margin: 5px; }
        button { background: #0f0; color: black; border: none; cursor: pointer; }
        pre { background: #111; padding: 15px; overflow: auto; }
      </style>
    </head>
    <body>
      <h1>V2Ray VLESS + WS + TLS Config Generator</h1>
      
      <input type="text" id="domain" placeholder="Your Vercel Domain (e.g. yourproject.vercel.app)" style="width:400px"><br>
      <input type="text" id="uuid" placeholder="UUID" value="${crypto.randomUUID ? crypto.randomUUID() : 'de04add9-5c68-8bab-950c-08cd5320df18'}"><br>
      <input type="text" id="path" placeholder="Path" value="/argo-vless"><br><br>
      
      <button onclick="generate()">Generate Config</button>
      
      <pre id="output"></pre>

      <script>
        function generate() {
          const domain = document.getElementById('domain').value || 'your-domain.vercel.app';
          const uuid = document.getElementById('uuid').value;
          const path = document.getElementById('path').value || '/argo-vless';

          const config = \`vless://\${uuid}@\${domain}:443?encryption=none&security=tls&type=ws&host=\${domain}&path=\${path}#VLESS-WS-TLS-Vercel\`;

          document.getElementById('output').textContent = config;
        }
      </script>
    </body>
    </html>
  `);
});

app.listen(port, () => console.log(\`Server running on port \${port}\`));
