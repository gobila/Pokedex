import React from 'react';
import PropTypes, { object } from 'prop-types';
import Style from './style.module.scss';
import Logo from '../../assets/Pokeball.svg';

export default function Hearder({
  onclick,
  AZ,
  handleChange,
  input,
  close,
  list,
}) {
  console.log(list);
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
          list="pokemon_list"
        />
        <button
          aria-label="Close"
          className={Style.hearder_search_button}
          type="button"
          onClick={close}
        />
        <datalist id="pokemon_list">
          {list.map((i) => (
            <option key={i.name} style={{ background: 'red' }}>{i.name}</option>
          ))}
        </datalist>
      </form>
    </div>
  );
}

Hearder.propTypes = {
  onclick: PropTypes.func.isRequired,
  AZ: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  input: PropTypes.string.isRequired,
  list: PropTypes.objectOf({ x: object }),
};
Hearder.defaultProps = {
  list: {},
};
