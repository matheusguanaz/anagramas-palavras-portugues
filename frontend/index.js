const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const url = process.env.BACKEND_URL;

app.get('/routes', function (req, res) {
  return res.send(url);
 });

app.use(express.static('public'));

server.listen(process.env.PORT, () => {
  console.log('listening on *:3000');
});