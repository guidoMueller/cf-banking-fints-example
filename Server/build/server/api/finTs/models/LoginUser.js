"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LoginUser = function () {
  function LoginUser(sessionID) {
    _classCallCheck(this, LoginUser);

    this._sessionID = sessionID;
  }

  _createClass(LoginUser, [{
    key: "setUser",
    value: function setUser(loginArray) {
      this._username = loginArray[0];
      this._password = loginArray[1];
      this._blz = loginArray[2];
    }
  }, {
    key: "accounts",
    set: function set(accounts) {
      this._accounts = accounts;
    },
    get: function get() {
      return this._accounts;
    }
  }, {
    key: "statements",
    set: function set(statements) {
      this._statements = statements;
    },
    get: function get() {
      return this._statements;
    }
  }, {
    key: "username",
    get: function get() {
      return this._username;
    }
  }, {
    key: "password",
    get: function get() {
      return this._password;
    }
  }, {
    key: "blz",
    get: function get() {
      return this._blz;
    }
  }, {
    key: "session",
    get: function get() {
      return this._sessionID;
    }
  }]);

  return LoginUser;
}();

exports.default = LoginUser;