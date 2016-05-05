'use strict';

System.register([], function (_export, _context) {
  return {
    setters: [],
    execute: function () {
      function configure(aurelia, configCallback) {
        aurelia.globalResources('./timepicker/timepicker');
        aurelia.globalResources('./datepicker/datepicker');
        aurelia.globalResources('./datetimepicker/datetimepicker');
      }

      _export('configure', configure);
    }
  };
});