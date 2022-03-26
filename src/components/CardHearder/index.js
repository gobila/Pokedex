import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from './style.module.scss';
import { ReactComponent as ArrowBack } from '../../assets/arrow-back.svg';

export default function CardHearder({ name, ndex }) {
  const [mask, setMask] = useState();
  useEffect(() => {
    if (ndex <= 99) {
      if (ndex < 10) {
        return setMask('#00');
      }
      return setMask('#0');
    }
    return setMask('#');
  }, [name]);
  return (
    <div className={Style.CardHearder}>
      <Link to="/" className={`${Style.CardHearder_back} bold poppins-s24`}>
        <ArrowBack className={Style.CardHearder_back_icon} />
      </Link>
      <h2 className={`${Style.CardHearder_name} bold poppins-s24`}>{name}</h2>
      <p className={`${Style.CardHearder_ndex} bold poppins-s12`}>
        {mask}
        {ndex}
      </p>
    </div>
  );
}

CardHearder.propTypes = {
  name: PropTypes.string.isRequired,
  ndex: PropTypes.string.isRequired,
};
