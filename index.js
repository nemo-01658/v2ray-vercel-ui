const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>V2Ray Generator</title>
  <style>body{font-family:Arial;background:#111;color:#0f0;padding:30px;}</style>
</head>
<body>
  <h1>VLESS WS TLS Config</h1>
  <p>Domain: <input id="d" value="your-project.vercel.app"></p>
  <p>UUID: <input id="u" value="de04add9-5c68-8bab-950c-08cd5320df18"></p>
  <p>Path: <input id="p" value="/vless"></p>
  <button onclick="gen()">Generate</button>
  <pre id="o"></pre>

  <script>
    function gen() {
      var d = document.getElementById('d').value;
      var u = document.getElementById('u').value;
      var p = document.getElementById('p').value;
      var link = 'vless://' + u + '@' + d + ':443?encryption=none&security=tls&type=ws&host=' + d + '&path=' + p + '#VLESS-Vercel';
      document.getElementById('o').textContent = link;
    }
  </script>
</body>
</html>
  `);
  res.end();
});

app.listen(process.env.PORT || 3000);
