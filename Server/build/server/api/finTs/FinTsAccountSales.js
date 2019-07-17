'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimeBullet = require("./models/TimeBullet");

var _TimeBullet2 = _interopRequireDefault(_TimeBullet);

var _TimeAxis = require("./models/TimeAxis");

var _TimeAxis2 = _interopRequireDefault(_TimeAxis);

var _AccountUtil = require("./Utils/AccountUtil");

var _faker = require("faker");

var _faker2 = _interopRequireDefault(_faker);

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FinTsAccountSales = function FinTsAccountSales(app) {

  function getTransactions(count, startdate, enddate, currency) {
    var transactions = [];
    var totalAmount = 0;
    for (var i = 0; i < count; i++) {
      var date = (0, _moment2.default)(_faker2.default.date.between(startdate, enddate)).format("YYYY-MM-DD");
      var name = _faker2.default.name.firstName();
      var last = _faker2.default.name.lastName();
      var transaction = {
        "id": _faker2.default.random.uuid(),
        "code": "NMSC",
        "fundsCode": "",
        "isCredit": _faker2.default.random.arrayElement([true, false, true]),
        "isExpense": _faker2.default.random.arrayElement([true, false, true]),
        "currency": currency,
        "description": _faker2.default.lorem.words(5),
        "amount": parseFloat(_faker2.default.finance.amount()),
        "valueDate": date,
        "entryDate": "",
        "customerReference": "",
        "bankReference": "",
        "descriptionStructured": {
          "reference": {
            "raw": _faker2.default.lorem.words(5),
            "endToEndRef": "000000009802",
            "text": _faker2.default.lorem.words(5)
          },
          "name": name + " " + last,
          "iban": _faker2.default.finance.iban(),
          "bic": _faker2.default.finance.bic()
        }
      };
      if (transaction.isCredit) {
        totalAmount = totalAmount + parseFloat(transaction.amount);
      } else {
        totalAmount = totalAmount - parseFloat(transaction.amount);
      }
      transactions.push(transaction);
    }
    return { totalAmount: totalAmount, transactions: transactions };
  }

  function mapStatements(statements) {
    var transactions = [];
    for (var i in statements) {
      var statement = statements[i];
      if (statement.hasOwnProperty("transactions") && statement.transactions.length > 0) {
        for (var is in statement.transactions) {
          var transaction = statement.transactions[is];
          transactions.push(transaction);
        }
      }
    }
    return {
      statements: statements,
      transactions: transactions
    };
  }

  function mapStatementsTimeAxis(statements) {
    /*{
          Cost: 366772.52
          Date: "8/1/2012"
          Revenue: 1626729.16
        }*/
    var statementsByDate = [];
    statements.transactions.map(function (statement) {
      if (statementsByDate[statement.valueDate] === undefined) {
        statementsByDate[statement.valueDate] = [];
      }
      statementsByDate[statement.valueDate].push(statement);
    });
    var timeAxisStacked = [];
    var lastItem = null;
    for (var index in statementsByDate) {
      var statementByDate = statementsByDate[index];
      var timeAxisItem = void 0;
      if (lastItem === null) {
        timeAxisItem = new _TimeAxis2.default(0, 0, index);
      } else {
        timeAxisItem = new _TimeAxis2.default(lastItem.Revenue, lastItem.Cost, index);
      }

      for (var indexS in statementByDate) {
        var statement = statementByDate[indexS];
        var isCredit = statement.isCredit,
            isExpense = statement.isExpense,
            amount = statement.amount;


        if (!isCredit && isExpense) {
          timeAxisItem.setCost(parseFloat(amount));
        }
        if (isCredit && isExpense) {
          timeAxisItem.setRevenue(parseFloat(amount));
        }
      }

      lastItem = timeAxisItem;
      timeAxisStacked.push(timeAxisItem);
    }
    return timeAxisStacked;
  }

  function mapStatementsMedium(statements) {
    /*{
      Cost: 366772.52
      Date: "8/1/2012"
      Revenue: 1626729.16
    }*/
  }

  function mapStatementsTimeBulletStacked(statements) {
    /*{
          Budget: 300000
          Cost: 588000.41
          Cost1: 403200.08
          Cost2: 184800.33
          Date: "12/12/2016"
          Revenue: 944000.04
          Target: 900000
        }*/
    var statementsByDate = [];
    statements.transactions.map(function (statement) {
      if (statementsByDate[statement.valueDate] === undefined) {
        statementsByDate[statement.valueDate] = [];
      }
      statementsByDate[statement.valueDate].push(statement);
    });
    var timeBulletStacked = [];
    var lastItem = null;
    for (var index in statementsByDate) {
      var statementByDate = statementsByDate[index];
      var timeBulletStackedItem = void 0;
      if (lastItem === null) {
        timeBulletStackedItem = new _TimeBullet2.default(0, 0, index);
      } else {
        timeBulletStackedItem = new _TimeBullet2.default(lastItem.Revenue, lastItem.Cost, index);
      }

      for (var indexS in statementByDate) {
        var statement = statementByDate[indexS];
        var isCredit = statement.isCredit,
            isExpense = statement.isExpense,
            amount = statement.amount;


        if (!isCredit && isExpense) {
          timeBulletStackedItem.setCost(parseFloat(amount));
          timeBulletStackedItem.setCost1(parseFloat(amount));
        }
        if (isCredit && isExpense) {
          timeBulletStackedItem.setRevenue(parseFloat(amount));
          timeBulletStackedItem.setCost2(parseFloat(amount));
        }
      }

      lastItem = timeBulletStackedItem;
      timeBulletStacked.push(timeBulletStackedItem);
    }
    return timeBulletStacked;
  }

  app.get('/apiFinTs/getAccountSales/:iban/:startdate/:enddate', function (req, res) {
    var params = req.params,
        user = req.user;
    var startdate = params.startdate,
        enddate = params.enddate,
        iban = params.iban;


    if (startdate === null || startdate === undefined || enddate === null || enddate === undefined || iban === null || iban === undefined) {
      return false;
    }
    console.log(req.user);
    if (req.user !== undefined && req.user !== null && req.headers['demo-mode'] === undefined) {
      var client = (0, _AccountUtil.getClient)(user);
      if (client) {
        var accounts = (0, _AccountUtil.getBankFromIban)(user, iban);
        if (accounts) {
          client.statements(accounts[0], startdate, enddate).then(function (statements) {
            res.json(mapStatements(statements));
          });
        }
      }
    } else if (req.headers['demo-mode'] !== undefined) {
      var currency = _faker2.default.random.arrayElement(["EUR", "USD"]);
      var transactions = getTransactions(30, startdate, enddate, currency);
      var returnObject = {
        "statements": [{
          "transactions": transactions.transactions,
          "referenceNumber": "DEUTDEFFXXXX",
          "accountId": "76026000/123456789",
          "openingBalance": {
            "isCredit": true,
            "date": (0, _moment2.default)(new Date(startdate)).format("YYYY-MM-DD"),
            "currency": currency,
            "value": 0
          },
          "number": "00000",
          "closingBalance": {
            "isCredit": Math.sign(transactions.totalAmount) === -1 ? false : true,
            "date": (0, _moment2.default)(new Date(enddate)).format("YYYY-MM-DD"),
            "currency": "EUR",
            "value": parseFloat(transactions.totalAmount)
          }
        }],
        "transactions": transactions.transactions
      };
      res.json(returnObject);
    } else {
      res.json([]);
    }
  });

  app.get("/apiFinTs/getAccountSalesChart/:service/:iban/:startdate/:enddate", function (req, res) {
    var params = req.params,
        user = req.user;
    var startdate = params.startdate,
        enddate = params.enddate,
        iban = params.iban,
        service = params.service;

    if (user === null || user === undefined || startdate === null || startdate === undefined || enddate === null || enddate === undefined || iban === null || iban === undefined || service === null || service === undefined) {
      return false;
    }
    var client = (0, _AccountUtil.getClient)(user);
    if (client) {
      var accounts = (0, _AccountUtil.getBankFromIban)(user, iban);
      if (accounts) {
        client.statements(accounts[0], startdate, enddate).then(function (statements) {
          statements = mapStatements(statements);
          switch (service) {
            case "timeAxis":
              statements = mapStatementsTimeAxis(statements);
              break;
            case "medium":
              statements = mapStatementsMedium(statements);
              break;
            case "timeBulletStacked":
              statements = mapStatementsTimeBulletStacked(statements);
              break;
            case "timeMultiple":
              statements = mapStatementsTimeBulletStacked(statements);
              break;
          }
          res.json(statements);
        });
      }
    }
  });
};
exports.default = FinTsAccountSales;