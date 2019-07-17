'use strict';

//import { PinTanClient } from "../../../../../../node_modules/nodejs-fints/packages/fints/dist";
import uuid from "uuid/v4"
import session from 'express-session';
import MemorySessionStore from "memorystore"
import passport from "passport"
import CustomStrategy from "passport-custom"
import { getAccountStatements } from './Utils/StatementsUtil'
import { getFinTsClient, getLoginUserFromBase64Code } from './Utils/AccountUtil'
import { PinTanClient } from "node-fints";
import moment from "moment"


let finTSInstitute = function( app ) {

  let MemoryStore = new MemorySessionStore( session )
  const users = []

// configure passport.js to use the local strategy
  function findAndUpdateByOid( session, fn, newUser ) {
    var findUser = false;
    for ( let i = 0, len = users.length; i < len; i++ ) {
      let user = users[i];
      if ( user.session === session ) {
        users[i] = newUser;
        findUser = true;
        fn( null, newUser );
      }
    }
    if ( !findUser ) {
      users.push( newUser );
      fn( null, newUser );
    }
  }

  passport.use( 'finTs', new CustomStrategy(
    function( req, callback ) {
      let loginUser = getLoginUserFromBase64Code( req );
      const client = getFinTsClient( loginUser );

      if ( client ) {
        client.accounts().then( function( accounts ) {
          loginUser.accounts = accounts;
          getAccountStatements( client, accounts, [], ( statements, accountsBack ) => {
            loginUser.statements = statements;
            req.session.user = loginUser;
            req.user = loginUser;
            findAndUpdateByOid( loginUser.session, callback, loginUser );
          } )
        } ).catch( () => {
          callback( false )
          return
        } )
      } else {
        callback( false )
        return
      }
    }
  ) );

  passport.use( 'finTsRelogin', new CustomStrategy(
    function( req, callback ) {
      let loginUser = getLoginUserFromBase64Code( req );
      const client = getFinTsClient( loginUser );

      if ( client ) {
        client.accounts().then( function( accounts ) {
          loginUser.accounts = accounts;
          req.session.user = loginUser;
          req.user = loginUser;
          findAndUpdateByOid( loginUser.session, callback, loginUser );
        } ).catch( () => {
          callback( false )
          return
        } )
      } else {
        callback( false )
        return
      }
    }
  ) );

// tell passport how to serialize the user
  passport.serializeUser( ( user, done ) => {
    done( null, user.session );
  } );

  passport.deserializeUser( ( session, done ) => {
    for ( let i = 0, len = users.length; i < len; i++ ) {
      let user = users[i];
      if ( user.session === session ) {
        return done( null, user );
      }
    }
    return done( null, null );
  } );

// add & configure middleware
  app.use( session( {
                      genid: ( req ) => {
                        return uuid() // use UUIDs for session IDs
                      },
                      store: new MemoryStore( {
                                                checkPeriod: 86400000 // prune expired entries every 24h
                                              } ),
                      secret: 'keyboard cat',
                      resave: false,
                      saveUninitialized: true
                    } ) )

  app.use( passport.initialize() );
  app.use( passport.session() );


  app.post( '/login', ( req, res, next ) => {
    passport.authenticate( 'finTs', ( err, user ) => {
      if ( err === null && user === false ) {
        res.status( 401 ).json( {message: false} );
      }
      if ( err === null && user !== null && user !== false ) {
        req.login( user, ( err ) => {
          return res.status( 200 ).json( {message: true, accounts: req.session.user.accounts} );
        } )
      }
    } )( req, res, next );
  } )


  app.post( '/checkLoginAndRelogin', ( req, res, next ) => {
    if ( req.isAuthenticated() ) {
      res.status( 200 ).json( {isLogin: true, isOld: true, accounts: req.user.accounts} );
    } else {
      passport.authenticate( 'finTsRelogin', ( err, user ) => {
        if ( err === null && user === false ) {
          res.status( 401 ).json( {message: false} );
        }
        if ( err === null && user !== null && user !== false ) {
          req.login( user, ( err ) => {
            return res.status( 200 ).json( {isLogin: true, isOld: false, accounts: req.user.accounts} );
          } )
        }
      } )( req, res, next );
    }
  } )


  app.get( '/logout', function( req, res ) {
    req.session.destroy( function( err ) {
      req.logOut();
      return res.status( 200 ).json( {logout: true} );
    } )
  } )

  app.get( '/authrequired', ( req, res ) => {
    if ( req.isAuthenticated() ) {
      res.send( 'you hit the authentication endpoint\n' )
    } else {
      res.redirect( '/' )
    }
  } )


};
export default finTSInstitute