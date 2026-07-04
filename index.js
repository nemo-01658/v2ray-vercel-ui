const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Trojan WS TLS Generator</title>
  <style>
    body {font-family:Arial;background:#111;color:#0f0;padding:30px;}
    input, button {padding:12px;margin:8px 0;width:400px;}
    button {background:#0f0;color:black;font-weight:bold;}
    pre {background:#222;padding:15px;}
  </style>
</head>
<body>
  <h1>Trojan + WS + TLS Config Generator</h1>
  <p>Domain: <input id="d" value="v2ray-vercel-ui.vercel.app"></p>
  <p>Password: <input id="p" value="password123"></p>
  <p>Path: <input id="path" value="/trojan"></p><br>
  <button onclick="gen()">Generate Trojan Config</button>
  <pre id="o"></pre>

  <script>
    function gen() {
      var d = document.getElementById('d').value;
      var pass = document.getElementById('p').value;
      var path = document.getElementById('path').value || '/trojan';
      var link = 'trojan://' + pass + '@' + d + ':443?security=tls&type=ws&host=' + d + '&path=' + path + '#Trojan-WS-TLS-Vercel';
      document.getElementById('o').textContent = link;
    }
  </script>
</body>
</html>
  `);
});

app.listen(process.env.PORT || 3000);
