define('app',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.startDate = (0, _moment2.default)();
    }

    App.prototype.dateChanged = function dateChanged(date) {
      this.startDate = date;
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().globalResources(['./resources/value-converters/date']);

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('resources/elements/date-picker',['exports', 'react', 'react-dom', 'react-datepicker', 'aurelia-framework'], function (exports, _react, _reactDom, _reactDatepicker, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DatePicker = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var DatePicker = exports.DatePicker = (_dec = (0, _aureliaFramework.noView)(['react-datepicker/react-datepicker.css']), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 = function () {
    function DatePicker(element) {
      _classCallCheck(this, DatePicker);

      _initDefineProp(this, 'selectedDate', _descriptor, this);

      _initDefineProp(this, 'onChange', _descriptor2, this);

      this.element = element;
    }

    DatePicker.prototype.selectedDateChanged = function selectedDateChanged() {
      this.render();
    };

    DatePicker.prototype.render = function render() {
      var _this = this;

      _reactDom2.default.render(_react2.default.createElement(_reactDatepicker2.default, {
        selected: this.selectedDate,
        onChange: function onChange(date) {
          return _this.onChange({ date: date });
        }
      }), this.element);
    };

    return DatePicker;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'selectedDate', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'onChange', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class2)) || _class) || _class);
});
define('resources/elements/react-date',['exports', 'react', 'react-dom', 'aurelia-framework', '../react-components/formatted-date'], function (exports, _react, _reactDom, _aureliaFramework, _formattedDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ReactDate = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _formattedDate2 = _interopRequireDefault(_formattedDate);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

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

  var _dec, _dec2, _class, _desc, _value, _class2, _descriptor, _descriptor2;

  var ReactDate = exports.ReactDate = (_dec = (0, _aureliaFramework.noView)(), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = (_class2 = function () {
    function ReactDate(element) {
      _classCallCheck(this, ReactDate);

      _initDefineProp(this, 'date', _descriptor, this);

      _initDefineProp(this, 'format', _descriptor2, this);

      this.element = element;
    }

    ReactDate.prototype.dateChanged = function dateChanged() {
      this.render();
    };

    ReactDate.prototype.formatChanged = function formatChanged() {
      this.render();
    };

    ReactDate.prototype.render = function render() {
      _reactDom2.default.render(_react2.default.createElement(_formattedDate2.default, {
        date: this.date,
        format: this.format
      }), this.element);
    };

    return ReactDate;
  }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'date', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'format', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: function initializer() {
      return 'dddd, MMMM D, YYYY';
    }
  })), _class2)) || _class) || _class);
});
define('resources/react-components/formatted-date',['exports', 'react', 'moment'], function (exports, _react, _moment) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = undefined;

    var _react2 = _interopRequireDefault(_react);

    var _moment2 = _interopRequireDefault(_moment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var FormattedDate = function (_React$Component) {
        _inherits(FormattedDate, _React$Component);

        function FormattedDate(props) {
            _classCallCheck(this, FormattedDate);

            return _possibleConstructorReturn(this, _React$Component.call(this, props));
        }

        FormattedDate.prototype.render = function render() {
            if (!this.props.date) {
                return null;
            }

            var _props = this.props,
                date = _props.date,
                format = _props.format;


            return _react2.default.createElement(
                'span',
                null,
                (0, _moment2.default)(date).format(format)
            );
        };

        return FormattedDate;
    }(_react2.default.Component);

    exports.default = FormattedDate;


    FormattedDate.defaultProps = {
        date: new Date(),
        format: 'dddd, MMMM D, YYYY'
    };
});
define('resources/value-converters/date',['exports', 'moment'], function (exports, _moment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.DateValueConverter = undefined;

  var _moment2 = _interopRequireDefault(_moment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var DateValueConverter = exports.DateValueConverter = function () {
    function DateValueConverter() {
      _classCallCheck(this, DateValueConverter);
    }

    DateValueConverter.prototype.toView = function toView(value) {
      var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'dddd, MMMM D, YYYY';

      return (0, _moment2.default)(value).format(format);
    };

    return DateValueConverter;
  }();
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"./resources/elements/date-picker\"></require><require from=\"./resources/elements/react-date\"></require><h2>Pick a date!</h2><date-picker selected-date.bind=\"startDate\" on-change.call=\"dateChanged(date)\"></date-picker><p class=\"bg-success\">Start Date: ${startDate | date}</p><p class=\"bg-warning\">React Start Date:<react-date date.bind=\"startDate\"></react-date></p></template>"; });
//# sourceMappingURL=app-bundle.js.map