'use strict';

import { getAccountStatements } from './Utils/StatementsUtil'
import { getClient, getFinTsClient, getLoginUserFromBase64Code } from './Utils/AccountUtil'

import faker from 'faker'
import moment from 'moment'

let finTSInstitute = function( app ) {

  app.get( '/apiFinTs/getAccounts', function( req, res ) {
    if ( req.user !== null && req.headers['demo-mode'] === undefined ) {
      let client = getClient( req.user );
      let accounts = req.user.accounts
      accounts.map( ( account ) => {
        if ( account.hasOwnProperty( "statementsIsSet" ) && account.statementsIsSet ) {
          account.statementsIsSet = false
        }

        return account
      } )
      getAccountStatements( client, req.user.accounts, [], ( statements, accountsBack ) => {
        res.json( accounts );
      } )
    } else if ( req.headers['demo-mode'] !== undefined ) {
      faker.locale = "de";

      let account = function() {
        let bic = faker.finance.bic()
        let currency = faker.random.arrayElement( ["EUR", "USD"] )
        let accountNumber = faker.finance.account()
        let date = moment().format("YYYY-MM-DD")
        return {
          "iban": faker.finance.iban(),
          "bic": bic,
          "accountNumber": accountNumber,
          "accountName": faker.random.arrayElement( ["Girokonto", "Zinskonto"] ),
          "accountOwnerName": faker.name.lastName(faker.random.arrayElement( [0, 1] )) + ", " +  faker.name.firstName(faker.random.arrayElement( [0, 1] )),
          "subAccount": currency,
          "blz": String(faker.random.number()),
          "statementsIsSet": false,
          "statements": {
            "transactions": [],
            "referenceNumber": "DEUTDEFFXXXX",
            "accountId": "76026000/" + accountNumber,
            "openingBalance": {
              "isCredit": faker.random.arrayElement( [true, false] ),
              "date": date,
              "currency": currency,
              "value": parseFloat(faker.finance.amount())
            },
            "number": "00000",
            "closingBalance": {
              "isCredit": faker.random.arrayElement( [true, false] ),
              "date": date,
              "currency": currency,
              "value": parseFloat(faker.finance.amount())
            },
            "closingAvailableBalance": {
              "isCredit": faker.random.arrayElement( [true, false] ),
              "date": date,
              "currency": currency,
              "value": parseFloat(faker.finance.amount())
            }
          }
        }
      }
      res.json( [new account(), new account()] );
    } else {
      res.json( [] );
    }
  } );


  app.post( '/apiFinTs/getAccounts', function( req, res ) {
    let loginUser = getLoginUserFromBase64Code( req );
    const client = getFinTsClient( loginUser );
    client.accounts().then( function( accounts ) {
      loginUser.accounts = accounts;
      getAccountStatements( client, accounts, [], ( statements, accountsBack ) => {
        res.json( accounts );
      } )
    } ).catch( () => {
      res.json( {} );
      return
    } )
  } );
};
export default finTSInstitute