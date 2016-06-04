var express = require('express');
var app = express();
var moment = require('moment');
app.set('port', (process.env.PORT || 5000));
app.use('/$',function(req,res){
	res.sendFile(__dirname + '/index.html');
});
app.get('^/:data',function(req,res){
	 
	var unix,natural;
	if(/^[0-9]+$/.test(req.params.data))
	{
		unix = moment(req.params.data,"X").format("X");
		if(unix=='Invalid date')
		unix=null;
		else
		unix=Number.toNumber(unix);
		natural = moment(req.params.data,"X").format("MMMM DD, YYYY");
		if(natural=='Invalid date')
		natural=null;
	}
	else
	{
		unix = moment(req.params.data).format("X");
		if(unix=='Invalid date')
		unix=null;
		else
		unix=Number.toNumber(unix);
		natural = moment(req.params.data).format("MMMM DD, YYYY");
		if(natural=='Invalid date')
		natural=null;
	}
	var timestamp = {"unix":unix , "natural":natural};
	console.log(JSON.stringify(timestamp));
	res.json(timestamp);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});