var http = require( 'http' ),
    xml = require( 'libxmljs' );

var token = '';

module.exports = function( _token ) {
  token = _token;
  return exports;
};

exports.projects = function( callback ) {
  var client = http.createClient( 80, 'www.pivotaltracker.com' );
  var request = client.request( 'GET', '/services/v3/projects', {
    'host' : 'www.pivotaltracker.com',
    'X-TrackerToken' : token
  } );

  request.on( 'response', function( response ) {
    var body = '';
    response.on( 'data', function( chunk ) {
      body += chunk;
    } );

    response.end( 'end', function() {
      var doc = xml.parseXmlString( body );
      callback( doc );
    } );
  } );
};
