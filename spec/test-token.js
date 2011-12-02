var https = require( 'https' );
var parser = require( 'xml2json' );
var options = {
  agent : false,
  host : 'www.pivotaltracker.com',
  port : 443,
  path : '/services/v3/tokens/active',
  auth : 'ben.lindsey@gmail.com:c0ldw4rt'
};

https.get(options, function(res) {
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

