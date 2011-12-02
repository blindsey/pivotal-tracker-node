var http = require( 'http' );
var parser = require( 'xml2json' );
var options = {
  agent : false,
  host : 'www.pivotaltracker.com',
  port : 80,
  path : '/services/v3/projects',
  headers : {
    'X-TrackerToken' : 'd42ee06147bad4307a8cb4c13db8dbc4'
  }
};

http.get(options, function(res) {
  console.log("STATUS: " + res.statusCode);
  console.log("HEADERS: " + JSON.stringify( res.headers ));
  var body = '';
  res.on('data', function(chunk) {
    body += chunk;
  });
  res.on('end', function() {
    console.log("BODY: " + parser.toJson(body) );
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});

