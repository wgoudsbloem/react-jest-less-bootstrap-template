var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json

app.post('/api', function(req, res) {
  console.info(req.body);
  res.send({text:'This text is an AJAX call, with id: '+req.body.id});
});


app.listen(8083, function() {
  console.log('server running on port: ' + this.address().port);
});
