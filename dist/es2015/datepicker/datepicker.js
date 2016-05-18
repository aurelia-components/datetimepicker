var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
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

import { inject, customElement, bindable, bindingMode } from 'aurelia-framework';
import 'eonasdan-bootstrap-datetimepicker';
import moment from 'moment';
import { customElementHelper } from '../utils/custom-element-helper';
import $ from 'jquery';

export let Datepicker = (_dec = customElement('datepicker'), _dec2 = inject(Element), _dec3 = bindable({ defaultBindingMode: bindingMode.twoWay }), _dec(_class = _dec2(_class = (_class2 = class Datepicker {

  constructor(element) {
    _initDefineProp(this, 'value', _descriptor, this);

    _initDefineProp(this, 'options', _descriptor2, this);

    _initDefineProp(this, 'disabled', _descriptor3, this);

    _initDefineProp(this, 'readonly', _descriptor4, this);

    _initDefineProp(this, 'icon', _descriptor5, this);

    this.element = element;
  }

  bind() {
    let defaultOpts = {
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
      let div = this.element.firstElementChild;
      this.$element = $(div);
    } else {
      let div = this.element.children[1].firstElementChild;
      this.$element = $(div);
    }

    this.options = this.options || {};
    if (this.options.format !== undefined) {
      delete this.options.format;
    }
    this.options = $.extend({}, defaultOpts, this.options);

    let datepicker = this.$element.datetimepicker(this.options);

    datepicker.on('dp.change', event => {
      const value = event.date;
      const el = this.element;
      customElementHelper.dispatchEvent(el, 'change', {
        value: value,
        element: el
      });

      this.value = value;
    });

    this.valueChanged(this.value);
  }

  valueChanged(newValue, oldValue) {
    if (newValue === null || newValue === undefined || newValue === false || moment(newValue).isValid() !== true) {
      let input = this.element.firstElementChild.firstElementChild;
      input.value = '';
      return;
    }

    if (moment(newValue).isSame(oldValue) && oldValue !== undefined) {
      return;
    }

    this.$element.data('DateTimePicker').date(newValue);
  }
}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'value', [_dec3], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'options', [bindable], {
  enumerable: true,
  initializer: function () {
    return null;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'disabled', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'readonly', [bindable], {
  enumerable: true,
  initializer: function () {
    return false;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'icon', [bindable], {
  enumerable: true,
  initializer: function () {
    return true;
  }
})), _class2)) || _class) || _class);