/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import PokeBox from '../components/PokeBox';
import apiConnect from '../service/apiConnect';

import '../theme/global.scss';
import Style from './Styles/Home.module.scss';

import '../components/PokeBox/style.scss';
import Hearder from '../components/Hearder';

function Home() {
  const [types, setTypes] = useState();
  const [toggleAZ, setToggleAZ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [page, setPage] = useState(0);
  const connect = apiConnect;
  // ORDERED
  const Click = () => {
    setToggleAZ(!toggleAZ);
    if (toggleAZ === false) {
      setPokemonData(pokemonData.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }));
    } if (toggleAZ === true) {
      setPokemonData(pokemonData.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      }));
    }
  };
  // END ORDERED
  async function getAllPokemon() {
    try {
      const data = await connect.getAll(9, 9 * page);
      const promises = data.results.map(async (item) => connect.getPokemon(item.name));
      const results = await Promise.all(promises);
      setPokemonData(results);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
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
  }

  useEffect(async () => {
    getAllPokemon();
  }, [page]);

  return (
    <div className="App">
      <Hearder onclick={Click} AZ={toggleAZ} />
      <div className="AppContainer">
        {pokemonData.map((item) => (
          <Link
            className={Style.Home_link}
            key={item.id}
            to={`/${item.name}`}
            state={{ pokemon: item }}
            style={{ width: '27%' }}
          >
            <PokeBox
              pokemon={item}
            />
          </Link>
        ))}
      </div>
      <button type="button" onClick={() => setPage(page - 1)}>
        voltar
      </button>
      <button type="button" onClick={() => setPage(page + 1)}>
        proximo
      </button>
    </div>
  );
}

export default Home;
