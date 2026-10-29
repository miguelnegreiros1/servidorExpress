var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var port = 3001;

app.get('/', function(req, res) {
  res.send('Oi, mundo :-)');
});

function soma(a, b) {
  return a + b;
}

app.post('/soma', function (req, res) {
  var body = req.body;
  
  
  var resultado = soma(body.a, body.b);
  
  res.send(`O resultado da soma de ${body.a} e ${body.b} é ${resultado}`);
});


app.listen(port, function() {
  console.log(`App de Exemplo escutando na porta http://localhost:${port}/`);
});