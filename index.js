const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>V2Ray Config</title>
      <style>body{font-family:Arial;background:#111;color:#0f0;padding:20px;}</style>
    </head>
    <body>
      <h1>VLESS WS TLS Config</h1>
      <p>Domain: <input id="d" value="your-domain.vercel.app" style="width:300px"></p>
      <p>UUID: <input id="u" value="de04add9-5c68-8bab-950c-08cd5320df18"></p>
      <p>Path: <input id="p" value="/vless"></p>
      <button onclick="gen()">Generate</button>
      <pre id="out"></pre>

      <script>
        function gen() {
          const d = document.getElementById('d').value || 'example.vercel.app';
          const u = document.getElementById('u').value;
          const p = document.getElementById('p').value || '/vless';
          const link = 'vless://' + u + '@' + d + ':443?encryption=none&security=tls&type=ws&host=' + d + '&path=' + encodeURIComponent(p) + '#VLESS-Vercel';
          document.getElementById('out').textContent = link;
        }
      </script>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port);
