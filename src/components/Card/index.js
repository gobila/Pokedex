/* eslint-disable react/prop-types */
import React from 'react';
import CardHearder from '../CardHearder/indes';
import Stats from '../Stats';
import Style from './style.module.scss';
import TagType from '../TagType';

export default function Card({
  id, name, imgs, types, weight, height, moves, stats, species, desc,
}) {
  return (
    <div className={` ${Style.card_container} type-${types[0].type.name}`}>
      <CardHearder
        name={name}
        ndex={id}
      />
      <img src={imgs.front_default} alt="" />
      <div className={` ${Style.card_info}`}>
        <div className={Style.card_types}>
          {types.map(({ type }) => (
            <TagType type={type} />
          ))}
        </div>
        <p>
          {weight}
        </p>
        <p>
          {height}
        </p>
        <p>
          {moves}
        </p>
        <p>
          {species}
        </p>
        <p>
          {desc}
        </p>
        <Stats
          data={stats}
        />
      </div>
    </div>
  );
}
