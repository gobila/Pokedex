import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.module.scss';

export default function CardImg({ img, name }) {
  return (
    <div className={Style.cardImg_container}>
      <img className={Style.cardImg_image} src={img} alt={`${name}`} />
    </div>
  );
}

CardImg.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string,
};
CardImg.defaultProps = {
  name: 'Pokemon Image',
};
