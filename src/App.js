/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import apiConnect from './service/apiConnect';

function App() {
  const [types, setTypes] = useState();
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const connect = apiConnect;

  async function getPokemon() {
    const list = pokemonList.map(async (item) => connect.getPokemon(item.name));
    const results = await Promise.all(list);
    setPokemonData(results);
  }

  useEffect(async () => {
    const getAll = await connect.getAll();
    setPokemonList(getAll.results);
    getPokemon();
  }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {pokemonData.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.types.map((i) => <p>{i.type.name}</p>)}</p>
          <p>{item.order}</p>
        </div>
      ))}
      {/* {pokemon.name} */}
    </div>
  );
}

export default App;
