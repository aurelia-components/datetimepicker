define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Timespan = exports.Timespan = function () {
    function Timespan(timespan) {
      _classCallCheck(this, Timespan);

      var hours = 0;
      var minutes = 0;
      if (typeof timespan === 'string') {
        var fragments = timespan.split(':');
        if (fragments.length >= 2) {
          hours = parseInt(fragments[0], 10);
          minutes = parseInt(fragments[1], 10);

          if (hours < 0 || hours > 23) {
            hours = 0;
          }

          if (minutes < 0 || minutes > 59) {
            minutes = 0;
          }
        }
      } else if (timespan.constructor.name === 'Moment') {
        hours = timespan.hours();
        minutes = timespan.minutes();
      }

      this.hours = hours;
      this.minutes = minutes;
    }

    Timespan.prototype.toString = function toString() {
      var result = '';
      if (this.hours < 10) {
        result += '0';
      }

      result += this.hours + ':';

      if (this.minutes < 10) {
        result += '0';
      }

      result += this.minutes;

      return result;
    };

    Timespan.prototype.equals = function equals(other) {
      if (other === undefined || other === null) {
        return false;
      }

      return this.hours === other.hours && this.minutes === other.minutes;
    };

    return Timespan;
  }();
});