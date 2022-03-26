/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Style from './style.module.scss';
import Logo from '../../assets/Pokeball.svg';

export default function Hearder({ onclick, AZ }) {
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className={Style.hearder_container}>
      <div className={Style.hearder_title}>
        <img className={Style.hearder_logo} src={Logo} alt="logo" />
        <h1>Pokédex</h1>
        <button
          className={Style.classification_button}
          type="button"
          onClick={() => (
            onclick()
          )}
        >
          <p className={Style.classification_text}>
            {AZ === false ? '#' : 'AZ'}
          </p>
          <img src="./icons/arrow-az.svg" alt="classification icon" />
        </button>

      </div>
      <form className={`${Style.hearder_search} poppins-s14`}>
        <img className={Style.hearder_search_image} src="./icons/search.svg" alt="" />
        <input
          value={input}
          onChange={handleChange}
          className={Style.hearder_search_input}
          type="text"
          placeholder="Procurar"
        />
        <button
          aria-label="Close"
          className={Style.hearder_search_button}
          type="button"
          onClick={() => setInput('')}
        />
      </form>
    </div>
  );
}

Hearder.propTypes = {
  onclick: PropTypes.func.isRequired,
  AZ: PropTypes.bool.isRequired,
};
