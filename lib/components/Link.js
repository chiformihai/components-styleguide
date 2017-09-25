'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  font-family: ', ';\n  text-decoration: none;\n  font-weight: 500;\n  color: ', ';\n  &:hover {\n    text-decoration: underline;\n  }\n'], ['\n  font-family: ', ';\n  text-decoration: none;\n  font-weight: 500;\n  color: ', ';\n  &:hover {\n    text-decoration: underline;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['', ''], ['', '']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledTheme = require('styled-theme');

var _NavLink = require('react-router-dom/NavLink');

var _NavLink2 = _interopRequireDefault(_NavLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var styles = (0, _styledComponents.css)(_templateObject, (0, _styledTheme.font)('primary'), (0, _styledTheme.palette)({ grayscale: 0 }, 1));

var StyledNavLink = (0, _styledComponents2.default)(function (_ref) {
  var theme = _ref.theme,
      reverse = _ref.reverse,
      colorPalette = _ref.palette,
      props = _objectWithoutProperties(_ref, ['theme', 'reverse', 'palette']);

  return _react2.default.createElement(_NavLink2.default, props);
})(_templateObject2, styles);
var Anchor = _styledComponents2.default.a(_templateObject2, styles);

var Link = function Link(_ref2) {
  var props = _objectWithoutProperties(_ref2, []);

  if (props.to) {
    return _react2.default.createElement(StyledNavLink, props);
  }
  return _react2.default.createElement(Anchor, props);
};

Link.propTypes = {
  palette: _propTypes2.default.string,
  reverse: _propTypes2.default.bool,
  to: _propTypes2.default.string
};

Link.defaultProps = {
  palette: 'primary',
  to: null,
  reverse: false
};

exports.default = Link;