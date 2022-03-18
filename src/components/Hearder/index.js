import React, { useEffect, useState } from 'react';
import Style from './style.module.scss';
import Logo from '../../assets/Pokeball.svg';
import apiConnect from '../../service/apiConnect';

function Classification() {
  const [toggleAZ, setToggleAZ] = useState(false);
  const [pokemonList, setPokemonList] = useState([]);
  const [data, setData] = useState([]);
  async function getAllPokemon() {
    const getAll = await apiConnect.getAll();
    const { results } = getAll;
    setData(results.map((item, n) => ({
      name: item.name,
      id: n + 1,
    })));
  }
  const ndex = () => setPokemonList(data.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  }));
  const AZ = () => setPokemonList(data.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  }));

  function onClick() {
    setToggleAZ(!toggleAZ);
  }
  const filter = toggleAZ === true ? AZ : ndex;
  useEffect(async () => {
    getAllPokemon();
    filter();
  }, [toggleAZ]);
  return (
    <>
      <button className={Style.classification_button} type="button" onClick={onClick}>
        <p className={Style.classification_text}>
          {toggleAZ === false ? '#' : 'AZ'}
        </p>
        <img src="./icons/arrow.svg" alt="classification icon" />
      </button>
      {pokemonList.map((i) => <p style={{ color: 'red' }}>{i.name}</p>)}
    </>
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
      <form className={`${Style.hearder_search} poppins-s14`}>
        <img className={Style.hearder_search_image} src="./icons/search.svg" alt="" />
        <input className={Style.hearder_search_input} type="text" placeholder="Procurar" />
        <button
          aria-label="Close"
          className={Style.hearder_search_button}
          type="button"
          onClick={() => console.log('button')}
        />
      </form>
    </div>
  );
}
