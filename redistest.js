var express = require('express');
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
    console.log('connected');
});

var app = new express();

app.get('/set', function(req, res){
	client.hmset('frameworks', {'javascript': 'AngularJS','css': 'Bootstrap','node': 'Express'});
	res.send('set');
});

app.get('/get', function(req, res){
	client.hgetall('frameworks', function(err, object) {
    	console.log(object);
	console.log(object.css);
	res.send(object.node);
});
});

app.listen(5600);
