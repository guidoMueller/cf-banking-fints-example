'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fintsInstituteDb = require("fints-institute-db");

var _fintsInstituteDb2 = _interopRequireDefault(_fintsInstituteDb);

var _fints = require("fints");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = function routes(oApp) {
	oApp.get('/', function (req, res) {
		console.log('Inside the homepage callback function', req.sessionID, req.user, req.session);
		if (req.user !== null && req.user !== undefined) {
			res.sendFile(_path2.default.join(__dirname, '../../../App/build/com/uniorg/cf/banking/example', 'index.html'));
		} else {
			res.sendFile(_path2.default.join(__dirname, '../../../App/build/com/uniorg/cf/banking/login', 'index.html'));
		}
	});
};

exports.default = routes;