var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

var port = '3000';

app.use(function(res, req, next){
	console.log('Time: ', Date.now());
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.send('Hello world fuckers');
});

app.listen(port);
console.log('Server started on port 3000');

module.exports = app; 