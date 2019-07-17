import express from "express"
import bodyParser from "body-parser"
import routes from "./routes/routes.js"
import FinTSInstitute from "./server/api/finTs/FinTSInstitute.js"
import FinTsAccounts from "./server/api/finTs/FinTsAccounts.js"
import FinTsAccountSales from "./server/api/finTs/FinTsAccountSales.js"
import FinTsLogin from "./server/api/finTs/FinTsLogin.js"
import path from "path";

const app = express();


// body parser middleware to handle URL parameter and JSON bodies
app.use( bodyParser.urlencoded( {extended: false} ) );
app.use( bodyParser.json() );

// add & configure middleware

// client express routes
FinTsLogin( app );
routes( app );

// api
FinTSInstitute( app );
FinTsAccounts( app );
FinTsAccountSales( app );
let server
app.use( "/node_modules", function( req, res ) {
	console.log(req.originalUrl)
	res.sendFile( path.join( __dirname, '../../', req.originalUrl ) );
} );
app.use( "/killServer", function( req, res ) {
  console.log("KillServer");
  server.close();
} );
app.use( "/node_modules", function( req, res ) {
  console.log(req.originalUrl)
  res.sendFile( path.join( __dirname, '../../', req.originalUrl ) );
} );
app.use( "/static/", function( req, res ) {
	console.log(req.originalUrl)
	res.sendFile( path.join( __dirname, '../../App/build/', req.originalUrl.replace("/static", "") ) );
} );

server = app.listen( process.env.PORT || 4000 );


