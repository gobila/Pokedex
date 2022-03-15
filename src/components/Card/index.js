/* eslint-disable react/prop-types */
import React from 'react';
import Style from './style.module.scss';

export default function Card({
  id, name, imgs, types, weight, height, moves, stats, species, desc,
}) {
  return (
    <div className={`${Style.container} ${Style.container_card} type-${types[0].type.name}`}>
      <p>
        {id}
      </p>
      <p>
        {name}
      </p>
      <img src={imgs.front_default} alt="" />
      <p>
        {types.map(({ type }) => (
          <p>
            {type.name}
          </p>
        ))}
      </p>
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
      {stats.map((item) => (
        <p>
          {item.stat.name}
          {item.base_stat}
        </p>
      ))}
    </div>
  );
}
