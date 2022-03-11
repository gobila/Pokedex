import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function PokeBox({ pokemon }) {
  const [mask, setMask] = useState();
  const { id } = pokemon;
  const { name } = pokemon;
  // eslint-disable-next-line no-undef
  const pokeImg = pokemon.sprites.other['official-artwork'].front_default;
  const pokeTypes = pokemon.types;

  useEffect(() => {
    if (id <= 99) {
      if (id < 10) {
        return setMask('#00');
      }
      return setMask('#0');
    }
    return setMask('#');
  }, [name]);

  return (
    <div className={`pokebox bd-${pokeTypes[0].type.name}`}>
      <div className="pokebox-ndex">
        <p className={`poppins-s12 color-${pokeTypes[0].type.name}`}>
          {mask + id}
        </p>
      </div>

      <img
        src={pokeImg}
        alt={`${name} srite`}
        className="pokebox-img"
      />
      <div className={`pokebox-name type-${pokemon.types[0].type.name}`}>
        <p className="poppins-s16">{name}</p>
      </div>
    </div>
  );
}

PokeBox.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: PropTypes.object.isRequired,
};
