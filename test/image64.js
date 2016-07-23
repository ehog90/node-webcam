/**
 * Base 64 image test
 *
 */
"use strict";

var NodeWebcam = require( __dirname + "/../index.js" );

var Path = require( "path" );

var FS = require( "fs" );


//Main capture sequence

describe( "Base 64 Capture", function() {


    //Default webcam capture using global API

    it( "Should capture and grab a base64 image", base64Capture );

});


//base 64 capture webcam

function base64Capture( done ) {

    this.timeout( 6000 );

    var url = Path.resolve( __dirname, "output", "test_image" );

    var Webcam = NodeWebcam.Factory.create();

    Webcam.capture( url, function( url ) {

        console.log( "Image saved to " + url );

        Webcam.getBase64( Webcam.shots.length - 1, function( base64 ) {

            var writeLocal = __dirname + "/output/test_image_64.html";

            var content = "<img src='" + base64 + "'>";

            FS.writeFile( writeLocal, content, function() {

                done();

            });

        });

    });

}
