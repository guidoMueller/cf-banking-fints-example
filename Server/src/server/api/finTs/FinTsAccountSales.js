'use strict';

import TimeBullet from "./models/TimeBullet"
import TimeAxis from "./models/TimeAxis"
import { getBankFromIban, getClient } from './Utils/AccountUtil'
import faker from "faker";
import moment from "moment";

let FinTsAccountSales = function( app ) {

  function getTransactions( count, startdate, enddate, currency ) {
    let transactions = []
    let totalAmount = 0
    for ( var i = 0; i < count; i++ ) {
      let date = moment(faker.date.between(startdate, enddate)).format( "YYYY-MM-DD" )
      let name = faker.name.firstName();
      let last = faker.name.lastName();
      let transaction = {
        "id": faker.random.uuid(),
        "code": "NMSC",
        "fundsCode": "",
        "isCredit": faker.random.arrayElement( [true, false, true] ),
        "isExpense": faker.random.arrayElement( [true, false, true] ),
        "currency": currency,
        "description": faker.lorem.words( 5 ),
        "amount": parseFloat(faker.finance.amount()),
        "valueDate": date,
        "entryDate": "",
        "customerReference": "",
        "bankReference": "",
        "descriptionStructured": {
          "reference": {
            "raw": faker.lorem.words( 5 ),
            "endToEndRef": "000000009802",
            "text": faker.lorem.words( 5 )
          },
          "name": name + " " + last,
          "iban": faker.finance.iban(),
          "bic": faker.finance.bic()
        }
      }
      if (transaction.isCredit) {
        totalAmount = totalAmount + parseFloat(transaction.amount)
      } else {
        totalAmount = totalAmount - parseFloat(transaction.amount)
      }
      transactions.push( transaction )
    }
    return {totalAmount: totalAmount, transactions: transactions}
  }

  function mapStatements( statements ) {
    let transactions = [];
    for ( let i in statements ) {
      let statement = statements[i]
      if ( statement.hasOwnProperty( "transactions" ) && statement.transactions.length > 0 ) {
        for ( let is in statement.transactions ) {
          let transaction = statement.transactions[is];
          transactions.push( transaction )
        }
      }
    }
    return {
      statements: statements,
      transactions: transactions
    }
  }

  function mapStatementsTimeAxis( statements ) {
    /*{
          Cost: 366772.52
          Date: "8/1/2012"
          Revenue: 1626729.16
        }*/
    let statementsByDate = []
    statements.transactions.map( ( statement ) => {
      if ( statementsByDate[statement.valueDate] === undefined ) {
        statementsByDate[statement.valueDate] = []
      }
      statementsByDate[statement.valueDate].push( statement )
    } )
    let timeAxisStacked = []
    let lastItem = null;
    for ( var index in statementsByDate ) {
      let statementByDate = statementsByDate[index]
      let timeAxisItem
      if ( lastItem === null ) {
        timeAxisItem = new TimeAxis( 0, 0, index )
      } else {
        timeAxisItem = new TimeAxis( lastItem.Revenue, lastItem.Cost, index )
      }

      for ( var indexS in statementByDate ) {
        let statement = statementByDate[indexS]
        let {isCredit, isExpense, amount} = statement

        if ( !isCredit && isExpense ) {
          timeAxisItem.setCost( parseFloat( amount ) )
        }
        if ( isCredit && isExpense ) {
          timeAxisItem.setRevenue( parseFloat( amount ) )
        }
      }

      lastItem = timeAxisItem
      timeAxisStacked.push( timeAxisItem )
    }
    return timeAxisStacked
  }

  function mapStatementsMedium( statements ) {
    /*{
      Cost: 366772.52
      Date: "8/1/2012"
      Revenue: 1626729.16
    }*/
  }

  function mapStatementsTimeBulletStacked( statements ) {
    /*{
          Budget: 300000
          Cost: 588000.41
          Cost1: 403200.08
          Cost2: 184800.33
          Date: "12/12/2016"
          Revenue: 944000.04
          Target: 900000
        }*/
    let statementsByDate = []
    statements.transactions.map( ( statement ) => {
      if ( statementsByDate[statement.valueDate] === undefined ) {
        statementsByDate[statement.valueDate] = []
      }
      statementsByDate[statement.valueDate].push( statement )
    } )
    let timeBulletStacked = []
    let lastItem = null;
    for ( var index in statementsByDate ) {
      let statementByDate = statementsByDate[index]
      let timeBulletStackedItem
      if ( lastItem === null ) {
        timeBulletStackedItem = new TimeBullet( 0, 0, index )
      } else {
        timeBulletStackedItem = new TimeBullet( lastItem.Revenue, lastItem.Cost, index )
      }

      for ( var indexS in statementByDate ) {
        let statement = statementByDate[indexS]
        let {isCredit, isExpense, amount} = statement

        if ( !isCredit && isExpense ) {
          timeBulletStackedItem.setCost( parseFloat( amount ) )
          timeBulletStackedItem.setCost1( parseFloat( amount ) )
        }
        if ( isCredit && isExpense ) {
          timeBulletStackedItem.setRevenue( parseFloat( amount ) )
          timeBulletStackedItem.setCost2( parseFloat( amount ) )
        }
      }

      lastItem = timeBulletStackedItem
      timeBulletStacked.push( timeBulletStackedItem )
    }
    return timeBulletStacked
  }

  app.get( '/apiFinTs/getAccountSales/:iban/:startdate/:enddate', function( req, res ) {
    let {params, user} = req
    let {startdate, enddate, iban} = params

    if ( startdate === null || startdate === undefined ||
         enddate === null || enddate === undefined ||
         iban === null || iban === undefined ) {
      return false
    }
    console.log(req.user);
    if ( req.user !== undefined && req.user !== null && req.headers['demo-mode'] === undefined ) {
      const client = getClient( user );
      if ( client ) {
        let accounts = getBankFromIban( user, iban );
        if ( accounts ) {
          client.statements( accounts[0], startdate, enddate ).then( function( statements ) {
            res.json( mapStatements( statements ) );
          } );
        }
      }
    } else if ( req.headers['demo-mode'] !== undefined ) {
      let currency = faker.random.arrayElement( ["EUR", "USD"] )
      let transactions = getTransactions( 30, startdate, enddate, currency )
      let returnObject = {
        "statements": [
          {
            "transactions": transactions.transactions,
            "referenceNumber": "DEUTDEFFXXXX",
            "accountId": "76026000/123456789",
            "openingBalance": {
              "isCredit": true,
              "date": moment(new Date(startdate)).format( "YYYY-MM-DD" ),
              "currency": currency,
              "value": 0
            },
            "number": "00000",
            "closingBalance": {
              "isCredit": (Math.sign(transactions.totalAmount) === -1 ? false : true),
              "date": moment(new Date(enddate)).format( "YYYY-MM-DD" ),
              "currency": "EUR",
              "value": parseFloat(transactions.totalAmount)
            }
          }
        ],
        "transactions": transactions.transactions
      }
      res.json( returnObject );

    } else {
      res.json( [] );
    }

  } );
  
  app.get( "/apiFinTs/getAccountSalesChart/:service/:iban/:startdate/:enddate", function( req, res ) {
    let {params, user} = req
    let {startdate, enddate, iban, service} = params
    if ( user === null || user === undefined ||
         startdate === null || startdate === undefined ||
         enddate === null || enddate === undefined ||
         iban === null || iban === undefined ||
         service === null || service === undefined ) {
      return false
    }
    const client = getClient( user );
    if ( client ) {
      let accounts = getBankFromIban( user, iban );
      if ( accounts ) {
        client.statements( accounts[0], startdate, enddate ).then( function( statements ) {
          statements = mapStatements( statements );
          switch ( service ) {
            case "timeAxis":
              statements = mapStatementsTimeAxis( statements )
              break;
            case "medium":
              statements = mapStatementsMedium( statements )
              break;
            case "timeBulletStacked":
              statements = mapStatementsTimeBulletStacked( statements )
              break;
            case "timeMultiple":
              statements = mapStatementsTimeBulletStacked( statements )
              break;
          }
          res.json( statements );
        } );
      }
    }
  } )


};
export default FinTsAccountSales