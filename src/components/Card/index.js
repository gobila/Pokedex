/* eslint-disable react/prop-types */
import React from 'react';
import CardHearder from '../CardHearder';
import Stats from '../Stats';
import Style from './style.module.scss';
import TagType from '../TagType';
import CardAbout from '../CardAbout';
import CardImg from '../CardImg';

export default function Card({
  id, name, imgs, types, weight, height, moves, stats, desc,
}) {
  return (
    <div className={` ${Style.card_container} `}>
      <CardHearder
        name={name}
        ndex={id}
      />
      <CardImg img={imgs.other['official-artwork'].front_default} name={name} />
      <div className={` ${Style.card_info}`}>
        <div className={Style.card_types}>
          {types.map(({ type }) => (
            <TagType type={type} />
          ))}
        </div>
        <h3 className={`color-${types[0].type.name} poppins-s16 bold`}>About</h3>
        <CardAbout
          weight={weight}
          height={height}
          moves={moves}
          desc={desc}
        />
        <h3 className={`color-${types[0].type.name} poppins-s16 bold`}>Base Stats</h3>
        <Stats
          typeColor={types[0].type.name}
          data={stats}
        />
      </div>
    </div>
  );
}
