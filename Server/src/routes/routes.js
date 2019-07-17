'use strict';

import path from "path"
import banks from "fints-institute-db";
import {PinTanClient} from "fints";

let routes = function( oApp ) {
	oApp.get( '/', function( req, res ) {
		console.log('Inside the homepage callback function', req.sessionID, req.user, req.session)
		if ( req.user !== null && req.user !== undefined ) {
			res.sendFile( path.join( __dirname, '../../../App/build/com/uniorg/cf/banking/example', 'index.html' ) );
		} else {
			res.sendFile( path.join( __dirname, '../../../App/build/com/uniorg/cf/banking/login', 'index.html' ) );
		}
	} );
}

export default routes

