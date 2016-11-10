'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _iso = require('iso-639-1');

var _iso2 = _interopRequireDefault(_iso);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ISO639ZH = function (_ISO) {
  _inherits(ISO639ZH, _ISO);

  function ISO639ZH() {
    _classCallCheck(this, ISO639ZH);

    return _possibleConstructorReturn(this, (ISO639ZH.__proto__ || Object.getPrototypeOf(ISO639ZH)).apply(this, arguments));
  }

  _createClass(ISO639ZH, null, [{
    key: 'getLanguages',
    value: function getLanguages(codes) {
      return _get(ISO639ZH.__proto__ || Object.getPrototypeOf(ISO639ZH), 'getLanguages', this).call(this, codes).map(function (l) {
        return _extends({}, l, { zhName: ISO639ZH.getZhName(l.code) });
      });
    }
  }, {
    key: 'getZhName',
    value: function getZhName(code) {
      return _get(ISO639ZH.__proto__ || Object.getPrototypeOf(ISO639ZH), 'validate', this).call(this, code) ? _data2.default[code] : '';
    }
  }, {
    key: 'getAllZhNames',
    value: function getAllZhNames() {
      return Object.values(_data2.default);
    }
  }]);

  return ISO639ZH;
}(_iso2.default);

exports.default = ISO639ZH;