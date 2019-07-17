'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StatementsUtil = require('./Utils/StatementsUtil');

var _AccountUtil = require('./Utils/AccountUtil');

var _faker = require('faker');

var _faker2 = _interopRequireDefault(_faker);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var finTSInstitute = function finTSInstitute(app) {

  app.get('/apiFinTs/getAccounts', function (req, res) {
    if (req.user !== null && req.headers['demo-mode'] === undefined) {
      var client = (0, _AccountUtil.getClient)(req.user);
      var accounts = req.user.accounts;
      accounts.map(function (account) {
        if (account.hasOwnProperty("statementsIsSet") && account.statementsIsSet) {
          account.statementsIsSet = false;
        }

        return account;
      });
      (0, _StatementsUtil.getAccountStatements)(client, req.user.accounts, [], function (statements, accountsBack) {
        res.json(accounts);
      });
    } else if (req.headers['demo-mode'] !== undefined) {
      _faker2.default.locale = "de";

      var account = function account() {
        var bic = _faker2.default.finance.bic();
        var currency = _faker2.default.random.arrayElement(["EUR", "USD"]);
        var accountNumber = _faker2.default.finance.account();
        var date = (0, _moment2.default)().format("YYYY-MM-DD");
        return {
          "iban": _faker2.default.finance.iban(),
          "bic": bic,
          "accountNumber": accountNumber,
          "subAccount": currency,
          "blz": String(_faker2.default.random.number()),
          "statementsIsSet": false,
          "statements": {
            "transactions": [],
            "referenceNumber": "DEUTDEFFXXXX",
            "accountId": "76026000/" + accountNumber,
            "openingBalance": {
              "isCredit": _faker2.default.random.arrayElement([true, false]),
              "date": date,
              "currency": currency,
              "value": parseFloat(_faker2.default.finance.amount())
            },
            "number": "00000",
            "closingBalance": {
              "isCredit": _faker2.default.random.arrayElement([true, false]),
              "date": date,
              "currency": currency,
              "value": parseFloat(_faker2.default.finance.amount())
            },
            "closingAvailableBalance": {
              "isCredit": _faker2.default.random.arrayElement([true, false]),
              "date": date,
              "currency": currency,
              "value": parseFloat(_faker2.default.finance.amount())
            }
          }
        };
      };
      res.json([new account(), new account()]);
    } else {
      res.json([]);
    }
  });

  app.post('/apiFinTs/getAccounts', function (req, res) {
    var loginUser = (0, _AccountUtil.getLoginUserFromBase64Code)(req);
    var client = (0, _AccountUtil.getFinTsClient)(loginUser);
    client.accounts().then(function (accounts) {
      loginUser.accounts = accounts;
      (0, _StatementsUtil.getAccountStatements)(client, accounts, [], function (statements, accountsBack) {
        res.json(accounts);
      });
    }).catch(function () {
      res.json({});
      return;
    });
  });
};
exports.default = finTSInstitute;