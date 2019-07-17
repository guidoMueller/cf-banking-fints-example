"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeMultiple = function () {
  function TimeMultiple(Revenue, Cost, Date) {
    _classCallCheck(this, TimeMultiple);

    this.Actual = 0;
    this.Budget = Cost;
    this.Cost = 0;
    this.Country = 0;
    this.Date = Date;
  }

  _createClass(TimeMultiple, [{
    key: "setActual",
    value: function setActual(value) {
      this.Actual = parseFloat(this.Actual) + parseFloat(value);
    }
  }, {
    key: "setCost",
    value: function setCost(value) {
      this.Cost = parseFloat(this.Cost) + parseFloat(value);
    }
  }]);

  return TimeMultiple;
}();

exports.default = TimeMultiple;