"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeAxis = function () {
  function TimeAxis(Revenue, Cost, Date) {
    _classCallCheck(this, TimeAxis);

    this.Cost = Cost;
    this.Date = Date;
    this.Revenue = Revenue;
  }

  _createClass(TimeAxis, [{
    key: "setRevenue",
    value: function setRevenue(value) {
      this.Revenue = parseFloat(this.Revenue) + parseFloat(value);
    }
  }, {
    key: "setCost",
    value: function setCost(value) {
      this.Cost = parseFloat(this.Cost) + parseFloat(value);
    }
  }]);

  return TimeAxis;
}();

exports.default = TimeAxis;