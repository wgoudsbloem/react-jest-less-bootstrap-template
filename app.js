var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.send('hell yo');
});


app.listen(8081, function() {
  console.log('server running on port: ' + this.address().port);
});
