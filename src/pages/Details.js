/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import '../App.css';
import Card from '../components/Card';
import TagType from '../components/TagType';
import apiConnect from '../service/apiConnect';
import '../theme/global.scss';
import Style from './Styles/Details.module.scss';

// eslint-disable-next-line react/prop-types
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

  async function getPokemonSpecie() {
    const getSpecie = await connection.getSpecie(id);
    setDesc(getSpecie.flavor_text_entries[0].flavor_text);
  }
  async function getNext() {
    const next = await connection.getPokemon(id + 1);
    setNextPokemon(next);
  }
  useEffect(() => {
    getPokemonSpecie();
    getNext();
  }, [pokemon]);
  console.log(nextPokemon);
  const link = id + 1;

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
      <Link to={`/${link}`} state={{ pokemon: nextPokemon }}>poximo</Link>
    </div>
  );
}

export default Details;
