const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>V2Ray Config Generator</title>
  <style>
    body {font-family:Arial;background:#111;color:#0f0;padding:30px;}
    input, button {padding:12px;margin:8px 0;width:100%;max-width:500px;}
    button {background:#0f0;color:black;font-weight:bold;}
    pre {background:#222;padding:15px;white-space:pre-wrap;}
  </style>
</head>
<body>
  <h1>VLESS + WS + TLS Generator</h1>
  
  <input id="domain" placeholder="Vercel Domain" value="your-project.vercel.app"><br>
  <input id="uuid" placeholder="UUID" value="de04add9-5c68-8bab-950c-08cd5320df18"><br>
  <input id="path" placeholder="Path" value="/vless"><br><br>
  
  <button onclick="generate()">Generate Config</button>
  <pre id="output"></pre>

  <script>
    function generate() {
      const domain = document.getElementById('domain').value || 'example.vercel.app';
      const uuid = document.getElementById('uuid').value;
      const path = document.getElementById('path').value || '/vless';
      const link = 'vless://' + uuid + '@' + domain + ':443?encryption=none&security=tls&type=ws&host=' + domain + '&path=' + encodeURIComponent(path) + '#VLESS-WS-TLS';
      document.getElementById('output').textContent = link;
    }
  </script>
</body>
</html>`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server started'));
