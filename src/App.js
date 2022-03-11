/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import TagType from './components/TagType';
import apiConnect from './service/apiConnect';

import './theme/global.scss';

function App() {
  const [types, setTypes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const connect = apiConnect;

  async function getAllPokemon() {
    const getAll = await connect.getAll();
    setPokemonList(getAll.results);
    setIsLoading(false);
  }
  async function getPokemon() {
    getAllPokemon();
    const list = pokemonList.map(async (item) => connect.getPokemon(item.name));
    const results = await Promise.all(list);
    setPokemonData(results);
  }
  async function getTypes() {
    getAllPokemon();
    const typesData = await connect.getTypes();
    setTypes(typesData.results);
    console.log(typesData.results);
  }

  useEffect(async () => {
    getPokemon();
    getTypes();
  }, [isLoading]);
  return (
    <div className="App">

      {pokemonData.map((item) => (
        <div key={item.id}>
          <img
            src={item.sprites.front_default}
            alt={`${item.name} srite`}
          />
          <p className="poppins-s16">{item.name}</p>
          {item.types.map((i) => (
            <TagType type={i.type.name}>{i.type.name}</TagType>
          ))}
          <p>{item.order}</p>
        </div>
      ))}
      {/* {pokemon.name} */}
    </div>
  );
}

export default App;
