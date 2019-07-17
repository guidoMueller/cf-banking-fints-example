import banks from "fints-institute-db";
import { PinTanClient } from "node-fints";
import { Base64 } from "js-base64";
import LoginUser from "../models/LoginUser";

export function getClient( user ) {
  let dsgv = banks.filter( function( bank ) {
    return bank.blz === this.blz
  }, {blz: user.blz} );
  if ( dsgv.length > 0 ) {
    return new PinTanClient( {
                               url: dsgv[0].pinTanURL,
                               name: user.username,
                               pin: user.password,
                               blz: user.blz
                             } );
  } else {
    return false
  }
}

export function getLoginUserFromBase64Code(req) {
  let pars = (Object.keys( req.body ).length > 0) ? req.body : req.query;
  let loginString = Base64.decode( pars.code );
  let loginUser = new LoginUser( req.sessionID );
  loginUser.setUser( loginString.split( ";" ) );

  return loginUser
}

export function getFinTsClient(loginUser) {
  let dsgv = banks.filter( function( bank ) {
    return bank.blz === this.blz
  }, {blz: loginUser.blz} );
  if ( dsgv.length > 0 ) {
    const client = new PinTanClient( {
                                       url: dsgv[0].pinTanURL,
                                       name: loginUser.username,
                                       pin: loginUser.password,
                                       blz: loginUser.blz
                                     } );
    return client
  }

  return false
}

export function getBankFromIban( user, iban ) {
  let accounts = user.accounts.filter( function( bank ) {
    return bank.iban === this.iban
  }, {iban: iban} );

  if ( accounts.length > 0 ) {
    return accounts
  } else {
    return false
  }
}

