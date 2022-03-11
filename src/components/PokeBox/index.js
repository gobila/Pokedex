import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function PokeBox({ pokemon }) {
  return (
    <div className={`pokebox bd-${pokemon.types[0].type.name}`}>
      <img
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} srite`}
      />
      <div className={`pokebox-name type-${pokemon.types[0].type.name}`}>
        <p className="poppins-s16">{pokemon.name}</p>
      </div>
    </div>
  );
}

PokeBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: PropTypes.object.isRequired,
};
