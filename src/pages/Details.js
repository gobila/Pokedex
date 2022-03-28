import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import Card from '../components/Card';
import apiConnect from '../service/apiConnect';
import '../theme/global.scss';
import Style from './Styles/Details.module.scss';
import Next from '../assets/arrow.svg';

function Details() {
  const location = useLocation();
  const { pokemon } = location.state;
  const [desc, setDesc] = useState([]);
  const {
    id, name, sprites, types, weight, height, moves, stats,
  } = pokemon;
  const move = [moves[0].move.name, moves[2].move.name];
  const connection = apiConnect;
  const [nextPokemon, setNextPokemon] = useState();
  const [lastPokemon, setLastPokemon] = useState();

  async function getPokemonSpecie() {
    const getSpecie = await connection.getSpecie(id);
    setDesc(getSpecie.flavor_text_entries[0].flavor_text);
  }
  useEffect(async () => {
    getPokemonSpecie();
    const last = await connection.getPokemon(id - 1);
    const next = await connection.getPokemon(id + 1);
    setNextPokemon(next);
    setLastPokemon(last);
  }, [pokemon]);
  return (
    <div className={Style.details}>
      <Card
        name={name}
        id={id}
        imgs={sprites}
        types={types}
        weight={weight}
        height={height}
        moves={move}
        desc={desc}
        stats={stats}
      />
      <div className={Style.details_pagination}>
        {lastPokemon ? (
          <Link
            to={`/${lastPokemon.name}`}
            state={{ pokemon: lastPokemon }}
            className={`${Style.details_pagination_arrows} ${Style.transform}`}
          >
            <img src={Next} alt="Back" />
          </Link>
        ) : ''}

        {nextPokemon ? (
          <Link
            to={`/${nextPokemon.name}`}
            state={{ pokemon: nextPokemon }}
            className={`${Style.details_pagination_arrows}`}
          >
            <img src={Next} alt="Back" />
          </Link>
        ) : ''}
      </div>
    </div>
  );
}

export default Details;
