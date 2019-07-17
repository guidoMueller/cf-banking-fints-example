"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getClient = getClient;
exports.getLoginUserFromBase64Code = getLoginUserFromBase64Code;
exports.getFinTsClient = getFinTsClient;
exports.getBankFromIban = getBankFromIban;

var _fintsInstituteDb = require("fints-institute-db");

var _fintsInstituteDb2 = _interopRequireDefault(_fintsInstituteDb);

var _nodeFints = require("node-fints");

var _jsBase = require("js-base64");

var _LoginUser = require("../models/LoginUser");

var _LoginUser2 = _interopRequireDefault(_LoginUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getClient(user) {
  var dsgv = _fintsInstituteDb2.default.filter(function (bank) {
    return bank.blz === this.blz;
  }, { blz: user.blz });
  if (dsgv.length > 0) {
    return new _nodeFints.PinTanClient({
      url: dsgv[0].pinTanURL,
      name: user.username,
      pin: user.password,
      blz: user.blz
    });
  } else {
    return false;
  }
}

function getLoginUserFromBase64Code(req) {
  var pars = Object.keys(req.body).length > 0 ? req.body : req.query;
  var loginString = _jsBase.Base64.decode(pars.code);
  var loginUser = new _LoginUser2.default(req.sessionID);
  loginUser.setUser(loginString.split(";"));

  return loginUser;
}

function getFinTsClient(loginUser) {
  var dsgv = _fintsInstituteDb2.default.filter(function (bank) {
    return bank.blz === this.blz;
  }, { blz: loginUser.blz });
  if (dsgv.length > 0) {
    var client = new _nodeFints.PinTanClient({
      url: dsgv[0].pinTanURL,
      name: loginUser.username,
      pin: loginUser.password,
      blz: loginUser.blz
    });
    return client;
  }

  return false;
}

function getBankFromIban(user, iban) {
  var accounts = user.accounts.filter(function (bank) {
    return bank.iban === this.iban;
  }, { iban: iban });

  if (accounts.length > 0) {
    return accounts;
  } else {
    return false;
  }
}