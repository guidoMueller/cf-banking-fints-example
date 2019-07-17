"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAccountStatements = getAccountStatements;

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getAccountStatements(client, accounts, statements, callback) {
  var _loop = function _loop(i) {
    var account = accounts[i];

    if (!account.hasOwnProperty("statementsIsSet") || account.hasOwnProperty("statementsIsSet") && !account.statementsIsSet) {
      client.statements(account, new Date((0, _moment2.default)().subtract(1, 'day').startOf('day')), new Date())
      /**.statements( account, new Date("2019-07-08"), new Date("2019-07-08") )*/
      .then(function (statementsBack) {
        statements.push(statementsBack);
        account.statementsIsSet = true;
        account.statements = statementsBack.length > 0 ? statementsBack[0] : {};
        var accountsFilter = accounts.filter(function (account) {
          return account.hasOwnProperty("statementsIsSet");
        });
        if (accountsFilter.length === accounts.length) {
          callback(statements, accounts);
          return;
        } else {
          getAccountStatements(client, accounts, statements, callback);
        }
      });
      return "break";
    }
  };

  for (var i in accounts) {
    var _ret = _loop(i);

    if (_ret === "break") break;
  }
}