var express = require('express');
var app = express();

var machine = require('./machine');

app.get('/main', (req, res) => {
  res.sendFile('/index.html', {root: __dirname});
});

app.get('/update', (req, res) => {
  var degree = parseFloat(req.query.degree);
  var distance = parseFloat(req.query.distance);
  machine.update(degree, distance);
  res.end();
});

app.get('/assign',(req, res) => {
  machine.assign();
  res.end();
});

app.get('/info',(req, res) => {
  res.send(machine.info());
});

app.listen(8000, () => {
  console.log('Server started.');
});