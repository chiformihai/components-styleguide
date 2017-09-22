import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * The only true button.
 */

const ButtonComponent = styled.button`
	padding: .5em 1.5em;
	color: #666;
	background-color: #fff;
	border-width: .1em;
	border-color: ${props => props.color};
	border-radius: .5em;
	text-align: center;
	font-size: ${props => props.fontSize};
	vertical-align: middle;
	cursor: pointer;
`;

const Button = ({ color, size, children }) => {

	return (
		<ButtonComponent color={color} fontSize={size}>
			{children}
		</ButtonComponent>
	);
};

Button.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};
Button.defaultProps = {
	color: '#333',
	size: 'normal',
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};

export default Button;
