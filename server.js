var express = require('express');
var app = express();
var moment = require('moment');
app.set('port', (process.env.PORT || 5000));
app.use('/$',function(req,res){
	res.sendFile(__dirname + '/index.html');
});
app.get('^/:data',function(req,res){
	 
	if(/^[0-9]+$/.test(req.params.data))
	{
		var unix = moment(req.params.data,"X").format("X");
		if(unix=='Invalid date')
		unix=null;
		var natural = moment(req.params.data,"X").format("MMMM DD, YYYY");
		if(natural=='Invalid date')
		natural=null;
		var timestamp = {"unix":unix , "natural":natural};
		console.log(JSON.stringify(timestamp));
		res.json(timestamp);
	}
	else
	{
		var unix = moment(req.params.data).format("X");
		if(unix=='Invalid date')
		unix=null;
		var natural = moment(req.params.data).format("MMMM DD, YYYY");
		if(natural=='Invalid date')
		natural=null;
		var timestamp = {"unix":unix , "natural":natural};
		console.log(JSON.stringify(timestamp));
		res.json(timestamp);
	}
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});