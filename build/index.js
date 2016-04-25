'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _iso6391 = require('iso-639-1');

var _iso63912 = _interopRequireDefault(_iso6391);

var _data = require('./data');

var DATA = _interopRequireWildcard(_data);

var ISO639ZH = (function (_ISO639) {
  _inherits(ISO639ZH, _ISO639);

  function ISO639ZH() {
    _classCallCheck(this, ISO639ZH);

    _get(Object.getPrototypeOf(ISO639ZH.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(ISO639ZH, null, [{
    key: 'getLanguages',
    value: function getLanguages(codes) {
      var list = _get(Object.getPrototypeOf(ISO639ZH), 'getLanguages', this).call(this, codes);
      list.forEach(function (l) {
        l.zhName = ISO639ZH.getZhName(l.code);
        return l;
      });
      return list;
    }
  }, {
    key: 'getZhName',
    value: function getZhName(code) {
      if (!_get(Object.getPrototypeOf(ISO639ZH), 'validate', this).call(this, code)) return '';
      return DATA.LANGUAGES_ZH_NAMES[code];
    }
  }, {
    key: 'getAllZhNames',
    value: function getAllZhNames() {
      var list = [];
      for (var code in DATA.LANGUAGES_ZH_NAMES) {
        list.push(DATA.LANGUAGES_ZH_NAMES[code]);
      }
      return list;
    }
  }]);

  return ISO639ZH;
})(_iso63912['default']);

exports['default'] = ISO639ZH;

console.log(ISO639ZH.getLanguages(['zh', 'en']));
module.exports = exports['default'];