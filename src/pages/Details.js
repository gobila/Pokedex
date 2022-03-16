/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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
  const apiSpecie = apiConnect;

  async function getPokemonSpecie() {
    const getSpecie = await apiSpecie.getSpecie(id);
    setDesc(getSpecie.flavor_text_entries[0].flavor_text);
  }
  useEffect(() => {
    getPokemonSpecie();
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
    </div>
  );
}

export default Details;
