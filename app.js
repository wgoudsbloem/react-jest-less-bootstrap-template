var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('public'));

app.use(bodyParser.json()); // for parsing application/json

app.post('/api', function(req, res) {
  res.send({id: req.body.id, text:'This text is an AJAX call, with id: '+req.body.id});
});


app.listen(8080, function() {
  console.log('server running on port: ' + this.address().port);
});
