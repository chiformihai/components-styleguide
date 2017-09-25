'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tpadding: .5em 1.5em;\n\tcolor: #666;\n\tbackground-color: #fff;\n\tborder-width: .1em;\n\tborder-color: ', ';\n\tborder-radius: .5em;\n\ttext-align: center;\n\tfont-size: ', ';\n\tvertical-align: middle;\n\tcursor: pointer;\n'], ['\n\tpadding: .5em 1.5em;\n\tcolor: #666;\n\tbackground-color: #fff;\n\tborder-width: .1em;\n\tborder-color: ', ';\n\tborder-radius: .5em;\n\ttext-align: center;\n\tfont-size: ', ';\n\tvertical-align: middle;\n\tcursor: pointer;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * The only true button.
 */

var ButtonComponent = _styledComponents2.default.button(_templateObject, function (props) {
	return props.color;
}, function (props) {
	return props.fontSize;
});

var Button = function Button(_ref) {
	var color = _ref.color,
	    size = _ref.size,
	    children = _ref.children;


	return _react2.default.createElement(
		ButtonComponent,
		{ color: color, fontSize: size },
		children
	);
};

Button.propTypes = {
	/**
  * Button label.
  */
	children: _propTypes2.default.string.isRequired,
	color: _propTypes2.default.string,
	size: _propTypes2.default.oneOf(['small', 'normal', 'large'])
};
Button.defaultProps = {
	color: '#333',
	size: 'normal'
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px'
};

exports.default = Button;