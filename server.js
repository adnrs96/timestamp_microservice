var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.get('/$',function(req,res){
	res.sendFile(__dirname + '/index.html');
});
app.get('/:data',function(req,res){
	console.log(req.params.data);
	
	res.end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});