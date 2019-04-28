var fs = require('fs');
var fileName = './data.json';

exports.update = function(degree, distance) {
  var data = JSON.parse(fs.readFileSync(fileName));
  if(data.state == 0) {
    data.first.degree = degree;
    data.first.distance = distance;
  } else if(data.state == 1) {
    data.second.degree = degree;
    data.second.distance = distance;
  }
  fs.writeFileSync(fileName, JSON.stringify(data));
}

exports.assign = function() {
  var data = JSON.parse(fs.readFileSync(fileName));
  if(data.state == 0) {
    data.state = 1;
  } else if(data.state == 1) {
    var a = data.first.degree;
    var x = data.first.distance;
    var b = data.second.degree;
    var y = data.second.distance;
    var cos = Math.cos( Math.abs(a - b) * Math.PI/180.0);
    var r = Math.sqrt(x*x + y*y - 2*x*y*cos);
    data.result = r;
    data.state = 2;
  } else {
    data.state = 0;
  }
  fs.writeFileSync(fileName, JSON.stringify(data));
}

exports.info = function() {
  return JSON.parse(fs.readFileSync(fileName));
}