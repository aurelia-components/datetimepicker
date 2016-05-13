'use strict';

System.register(['aurelia-framework', 'jquery', 'eonasdan-bootstrap-datetimepicker', 'moment', '../utils/custom-element-helper'], function (_export, _context) {
  var inject, customElement, bindable, bindingMode, Jquery, moment, customElementHelper, _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, Datepicker;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
    }, function (_jquery) {
      Jquery = _jquery.$;
    }, function (_eonasdanBootstrapDatetimepicker) {}, function (_moment) {
      moment = _moment.default;
    }, function (_utilsCustomElementHelper) {
      customElementHelper = _utilsCustomElementHelper.customElementHelper;
    }],
    execute: function () {
      _export('Datepicker', Datepicker = (_dec = customElement('datepicker'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = function () {
        function Datepicker(element) {
          _classCallCheck(this, Datepicker);

          _initDefineProp(this, 'value', _descriptor, this);

          _initDefineProp(this, 'options', _descriptor2, this);

          _initDefineProp(this, 'disabled', _descriptor3, this);

          _initDefineProp(this, 'readonly', _descriptor4, this);

          _initDefineProp(this, 'icon', _descriptor5, this);

          this.element = element;
        }

        Datepicker.prototype.bind = function bind() {
          var _this = this;

          var defaultOpts = {
            collapse: false,
            useCurrent: false,
            calendarWeeks: true,
            debug: false,
            locale: moment.locale(),
            format: 'L'
          };

          if (this.icon) {
            defaultOpts.icons = {
              time: 'fa fa-clock-o',
              date: 'fa fa-calendar',
              up: 'fa fa-chevron-up',
              down: 'fa fa-chevron-down',
              previous: 'fa fa-chevron-left',
              next: 'fa fa-chevron-right',
              today: 'fa fa-crosshairs',
              clear: 'fa fa-trash',
              close: 'fa fa-times'
            };
          }

          if (this.icon) {
            var div = this.element.firstElementChild;
            this.$element = jQuery(div);
          } else {
            var _div = this.element.children[1].firstElementChild;
            this.$element = jQuery(_div);
          }

          this.options = this.options || {};
          if (this.options.format !== undefined) {
            delete this.options.format;
          }
          this.options = jQuery.extend({}, defaultOpts, this.options);

          var datepicker = this.$element.datetimepicker(this.options);

          datepicker.on('dp.change', function (event) {
            var value = event.date;
            var el = _this.element;
            customElementHelper.dispatchEvent(el, 'change', {
              value: value,
              element: el
            });

            _this.value = value;
          });

          this.valueChanged(this.value);
        };

        Datepicker.prototype.valueChanged = function valueChanged(newValue, oldValue) {
          if (newValue === null || newValue === undefined || newValue === false || newValue.isValid() !== true) {
            var input = this.element.firstElementChild.firstElementChild;
            input.value = '';
            return;
          }

          if (newValue.isSame(oldValue) && oldValue !== undefined) {
            return;
          }

          this.$element.data('DateTimePicker').date(newValue);
        };

        return Datepicker;
      }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [bindable], {
        enumerable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class) || _class));

      _export('Datepicker', Datepicker);
    }
  };
});