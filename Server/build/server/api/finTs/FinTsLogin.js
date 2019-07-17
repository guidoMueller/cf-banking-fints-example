'use strict';

//import { PinTanClient } from "../../../../../../node_modules/nodejs-fints/packages/fints/dist";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _memorystore = require('memorystore');

var _memorystore2 = _interopRequireDefault(_memorystore);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportCustom = require('passport-custom');

var _passportCustom2 = _interopRequireDefault(_passportCustom);

var _StatementsUtil = require('./Utils/StatementsUtil');

var _AccountUtil = require('./Utils/AccountUtil');

var _nodeFints = require('node-fints');

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var finTSInstitute = function finTSInstitute(app) {

  var MemoryStore = new _memorystore2.default(_expressSession2.default);
  var users = [];

  // configure passport.js to use the local strategy
  function findAndUpdateByOid(session, fn, newUser) {
    var findUser = false;
    for (var i = 0, len = users.length; i < len; i++) {
      var user = users[i];
      if (user.session === session) {
        users[i] = newUser;
        findUser = true;
        fn(null, newUser);
      }
    }
    if (!findUser) {
      users.push(newUser);
      fn(null, newUser);
    }
  }

  _passport2.default.use('finTs', new _passportCustom2.default(function (req, callback) {
    var loginUser = (0, _AccountUtil.getLoginUserFromBase64Code)(req);
    var client = (0, _AccountUtil.getFinTsClient)(loginUser);

    if (client) {
      client.accounts().then(function (accounts) {
        loginUser.accounts = accounts;
        (0, _StatementsUtil.getAccountStatements)(client, accounts, [], function (statements, accountsBack) {
          loginUser.statements = statements;
          req.session.user = loginUser;
          req.user = loginUser;
          findAndUpdateByOid(loginUser.session, callback, loginUser);
        });
      }).catch(function () {
        callback(false);
        return;
      });
    } else {
      callback(false);
      return;
    }
  }));

  _passport2.default.use('finTsRelogin', new _passportCustom2.default(function (req, callback) {
    var loginUser = (0, _AccountUtil.getLoginUserFromBase64Code)(req);
    var client = (0, _AccountUtil.getFinTsClient)(loginUser);

    if (client) {
      client.accounts().then(function (accounts) {
        loginUser.accounts = accounts;
        req.session.user = loginUser;
        req.user = loginUser;
        findAndUpdateByOid(loginUser.session, callback, loginUser);
      }).catch(function () {
        callback(false);
        return;
      });
    } else {
      callback(false);
      return;
    }
  }));

  // tell passport how to serialize the user
  _passport2.default.serializeUser(function (user, done) {
    done(null, user.session);
  });

  _passport2.default.deserializeUser(function (session, done) {
    for (var i = 0, len = users.length; i < len; i++) {
      var user = users[i];
      if (user.session === session) {
        return done(null, user);
      }
    }
    return done(null, null);
  });

  // add & configure middleware
  app.use((0, _expressSession2.default)({
    genid: function genid(req) {
      return (0, _v2.default)(); // use UUIDs for session IDs
    },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }));

  app.use(_passport2.default.initialize());
  app.use(_passport2.default.session());

  app.post('/login', function (req, res, next) {
    _passport2.default.authenticate('finTs', function (err, user) {
      if (err === null && user === false) {
        res.status(401).json({ message: false });
      }
      if (err === null && user !== null && user !== false) {
        req.login(user, function (err) {
          return res.status(200).json({ message: true, accounts: req.session.user.accounts });
        });
      }
    })(req, res, next);
  });

  app.post('/checkLoginAndRelogin', function (req, res, next) {
    if (req.isAuthenticated()) {
      res.status(200).json({ isLogin: true, isOld: true, accounts: req.user.accounts });
    } else {
      _passport2.default.authenticate('finTsRelogin', function (err, user) {
        if (err === null && user === false) {
          res.status(401).json({ message: false });
        }
        if (err === null && user !== null && user !== false) {
          req.login(user, function (err) {
            return res.status(200).json({ isLogin: true, isOld: false, accounts: req.user.accounts });
          });
        }
      })(req, res, next);
    }
  });

  app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
      req.logOut();
      return res.status(200).json({ logout: true });
    });
  });

  app.get('/authrequired', function (req, res) {
    if (req.isAuthenticated()) {
      res.send('you hit the authentication endpoint\n');
    } else {
      res.redirect('/');
    }
  });
};exports.default = finTSInstitute;