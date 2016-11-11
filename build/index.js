'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _iso = require('iso-639-1');

var _iso2 = _interopRequireDefault(_iso);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ISO639ZH = function (_ISO) {
  (0, _inherits3.default)(ISO639ZH, _ISO);

  function ISO639ZH() {
    (0, _classCallCheck3.default)(this, ISO639ZH);
    return (0, _possibleConstructorReturn3.default)(this, (ISO639ZH.__proto__ || (0, _getPrototypeOf2.default)(ISO639ZH)).apply(this, arguments));
  }

  (0, _createClass3.default)(ISO639ZH, null, [{
    key: 'getLanguages',
    value: function getLanguages(codes) {
      return (0, _get3.default)(ISO639ZH.__proto__ || (0, _getPrototypeOf2.default)(ISO639ZH), 'getLanguages', this).call(this, codes).map(function (l) {
        return (0, _extends3.default)({}, l, { zhName: ISO639ZH.getZhName(l.code) });
      });
    }
  }, {
    key: 'getZhName',
    value: function getZhName(code) {
      return (0, _get3.default)(ISO639ZH.__proto__ || (0, _getPrototypeOf2.default)(ISO639ZH), 'validate', this).call(this, code) ? _data2.default[code] : '';
    }
  }, {
    key: 'getAllZhNames',
    value: function getAllZhNames() {
      return (0, _values2.default)(_data2.default);
    }
  }]);
  return ISO639ZH;
}(_iso2.default);

exports.default = ISO639ZH;