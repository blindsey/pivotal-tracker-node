var http = require( 'http' ),
    parser = require( 'xml2json' );

var token = '';

module.exports = function( _token ) {
  token = _token;
  return exports;
};

exports.projects = function( callback ) {
  var options = {
    host : 'www.pivotaltracker.com',
    port : 80,
    path : '/services/v3/projects',
    method : 'GET',
    'X-TrackerToken' : token
  };

  var request = http.request( options, function( response ) {
    response.on( 'data', function( chunk ) {
      body += chunk;
    } );

    response.on( 'end', function() {
      var json = parser.toJson( body );
      console.log( json );
      callback( json );
    } );
  } );
};
