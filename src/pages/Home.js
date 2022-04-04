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
  const [toggleAZ, setToggleAZ] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [input, setInput] = useState('');
  const connect = apiConnect;
  // ORDERED
  const Click = () => {
    setToggleAZ(!toggleAZ);
    if (toggleAZ === false) {
      setPokemons(pokemons.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }));
    } if (toggleAZ === true) {
      setPokemons(pokemons.sort((a, b) => {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      }));
    }
  };
  // END ORDERED
  const handleChange = (e) => {
    setInput(e.target.value);
    setIsLoading(true);
    if (e.target.value === '') {
      setIsLoading(false);
      setPokemons(pokemonData);
    }
  };
  useEffect(() => {
    setPokemons(pokemonData.filter((i) => i.name.indexOf(input) > -1));
  }, [input]);
  async function getAllPokemon() {
    try {
      // number os pokemon 897 (pokedex kalos)
      const data = await connect.getAll(15, 15 * page);
      const promises = data.results.map(async (item) => connect.getPokemon(item.name));
      const results = await Promise.all(promises);
      setPokemonData([...pokemonData, ...results]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(async () => {
    setPokemons(pokemonData);
    getAllPokemon();
  }, [page]);
  // setando a pagina
  useEffect(() => {
    if (isLoading === false) {
      const intersectionObserver = new IntersectionObserver((entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setPage((currentValue) => currentValue + 1);
        }
      });
      intersectionObserver.observe(document.querySelector('#sentinela'));
      return () => intersectionObserver.disconnect();
    }
    return '';
  }, [isLoading]);

  return (
    <div className="App">
      <Hearder
        onclick={Click}
        AZ={toggleAZ}
        list={pokemonData}
        handleChange={handleChange}
        input={input}
        close={() => {
          setInput('');
          setIsLoading(false);
        }}
        filtered={pokemons}
      />
      <div className="AppContainer">
        {pokemons.map((item) => (
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
      {pokemonData.length <= 897
      && (
        <div display="flex" flexDirection="column" alignItems="center" id="sentinela">
          <p>
            CARREGANDO
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
