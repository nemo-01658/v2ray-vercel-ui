const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('<h1>V2Ray Config Generator</h1><p>Coming soon...</p>');
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Server running on port ' + port);
});
