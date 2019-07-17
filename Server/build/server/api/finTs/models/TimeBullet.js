"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeBullet = function () {
  function TimeBullet(Revenue, Cost, Date) {
    _classCallCheck(this, TimeBullet);

    this.Budget = 0;
    this.Cost = Cost;
    this.Cost1 = 0;
    this.Cost2 = 0;
    this.Date = Date;
    this.Revenue = Revenue;
    this.Target = 900000;
  }

  _createClass(TimeBullet, [{
    key: "setRevenue",
    value: function setRevenue(value) {
      this.Revenue = parseFloat(this.Revenue) + parseFloat(value);
    }
  }, {
    key: "setCost",
    value: function setCost(value) {
      this.Cost = parseFloat(this.Cost) + parseFloat(value);
    }
  }, {
    key: "setCost1",
    value: function setCost1(value) {
      this.Cost1 = parseFloat(this.Cost1) + parseFloat(value);
    }
  }, {
    key: "setCost2",
    value: function setCost2(value) {
      this.Cost2 = parseFloat(this.Cost2) + parseFloat(value);
    }
  }]);

  return TimeBullet;
}();

exports.default = TimeBullet;