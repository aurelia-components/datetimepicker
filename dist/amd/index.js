define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    aurelia.globalResources('./timepicker/timepicker');
    aurelia.globalResources('./datepicker/datepicker');
    aurelia.globalResources('./datetimepicker/datetimepicker');
  }
});