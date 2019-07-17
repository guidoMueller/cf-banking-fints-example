'use strict';

import banks from "fints-institute-db"

let finTSInstitute = function( app ) {

	app.get( '/apiFinTs/getBanks', function( req, res ) {
		res.json( banks );
	} );

	app.get( '/apiFinTs/getBanksByBlz/:blz', function( req, res ) {
		let blz = req.params.blz;
		let dsgv = banks.filter( function( bank ) {
			return bank.blz === this.blz
		}, {blz: blz} );

		res.json( dsgv );
	} );

};
export default finTSInstitute
