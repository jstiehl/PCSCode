// We are going to build a server from scratch with node.js
var http = require('http');
var fs = require('fs');
var url = require('url');
var mime = require('mime');

var server = http.createServer(function(request, response){
	var parsedUrl = url.parse(request.url,true);
	var filepath = parsedUrl.pathname;
	var params = parsedUrl.query;

	if (filepath === '/api'){

		if(params.command === 'add' && params.a && params.b){
			response.write(''+(parseInt(params.a,10)+parseInt(params.b,10)));
			response.end();
		}

	} else {
	if (filepath === '/'){
		filepath = '/index.html';
	}
	
	fs.readFile('./public_html'+filepath, function(err, data){
		if(err){
			response.statusCode = 404;
			response.write(err.toString());
			response.end();
		} else {
		response.setHeader('Content-Type',mime.lookup(filepath));
		response.write(data);
		response.end();
		}
	});
}
});

server.listen(7357);