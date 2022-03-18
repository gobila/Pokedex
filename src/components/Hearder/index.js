import React, { useEffect, useState } from 'react';
import Style from './style.module.scss';
import Logo from '../../assets/Pokeball.svg';
import apiConnect from '../../service/apiConnect';

function Classification() {
  const states = {
    DEFAULT: '#',
    ALPHABETICAL: 'AZ',
  };
  const [toggle, setToggle] = useState(states.DEFAULT);

  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [data, setData] = useState([]);
  async function getAllPokemon() {
    const getAll = await apiConnect.getAll();
    const { results } = getAll;
    setData(results.map((item, n) => ({
      name: item.name,
      id: n + 1,
    })));
    setIsLoading(false);
  }

  useEffect(async () => {
    getAllPokemon();
  }, [isLoading]);
  console.log(pokemonList);
  const onClick = () => {
    if (toggle === states.DEFAULT) {
      setPokemonList(data.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      }));
      setToggle(states.ALPHABETICAL);
    } else {
      setPokemonList(data.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }));
      setToggle(states.DEFAULT);
      console.log('ALPHABETICAL');
    }
  };

  return (
    <button className={Style.classification_button} type="button" onClick={onClick}>
      <p className={Style.classification_text}>
        {toggle}
      </p>
      <img src="./icons/arrow.svg" alt="classification icon" />
    </button>
  );
}

export default function Hearder() {
  return (
    <div className={Style.hearder_container}>
      <div className={Style.hearder_title}>
        <img className={Style.hearder_logo} src={Logo} alt="logo" />
        <h1>Pokédex</h1>
        <Classification />
      </div>
      <input className={`${Style.hearder_search} poppins-s14`} type="text" placeholder="🔍Procurar" />
    </div>
  );
}
