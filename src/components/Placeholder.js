import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ImageComponent = styled.img`
	background: #ccc;
	alt: ${props => props.alt};
	width: ${props => props.width};
	height: ${props => props.height};
`;

/**
 * Image placeholders.
 */
class Placeholder extends Component {

	getImageUrl() {
		const { type, width, height } = this.props;
		const types = {
			animal: `http://placeimg.com/${width}/${height}/animals`,
			bacon: `http://baconmockup.com/${width}/${height}`,
			bear: `http://www.placebear.com/${width}/${height}`,
			beard: `http://placebeard.it/${width}/${height}`,
			cat: `http://lorempixel.com/${width}/${height}/cats`,
			city: `http://lorempixel.com/${width}/${height}/city`,
			food: `http://lorempixel.com/${width}/${height}/food`,
			nature: `http://lorempixel.com/${width}/${height}/nature`,
			people: `http://lorempixel.com/${width}/${height}/people`,
		};
		return types[type];
	}

	render() {
		const { type, width, height } = this.props;
		return (
			<ImageComponent
				src={this.getImageUrl()}
				alt={type}
				width={width}
				height={height}
			/>
		);
	}
}

Placeholder.propTypes = {
  type: PropTypes.oneOf([
    'animal',
    'bacon',
    'beard',
    'bear',
    'cat',
    'food',
    'city',
    'nature',
    'people',
  ]),
  width: PropTypes.number,
  height: PropTypes.number,
};

Placeholder.defaultProps = {
  type: 'animal',
  width: 150,
  height: 150,
};

export default Placeholder;
