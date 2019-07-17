'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fintsInstituteDb = require('fints-institute-db');

var _fintsInstituteDb2 = _interopRequireDefault(_fintsInstituteDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var finTSInstitute = function finTSInstitute(app) {

	app.get('/apiFinTs/getBanks', function (req, res) {
		res.json(_fintsInstituteDb2.default);
	});

	app.get('/apiFinTs/getBanksByBlz/:blz', function (req, res) {
		var blz = req.params.blz;
		var dsgv = _fintsInstituteDb2.default.filter(function (bank) {
			return bank.blz === this.blz;
		}, { blz: blz });

		res.json(dsgv);
	});
};
exports.default = finTSInstitute;