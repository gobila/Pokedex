import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.module.scss';

export default function CardAbout({
  weight, height, moves, desc,
}) {
  return (
    <div className={Style.About_container}>
      <div className={Style.About_weight}>
        <img src="./icons/Weight.svg" alt="Weight" className={Style.About_icon} />
        <p>{`${weight} kg`}</p>
      </div>
      <span className={Style.About_label}>Weight</span>

      <div className={Style.About_height}>
        <img src="./icons/Height.svg" alt="as" className={Style.About_icon} />
        <p>{`${height} m`}</p>
      </div>
      <span className={Style.About_label}>Height</span>

      <div className={Style.About_moves}>
        <div className={Style.About_moves_text}>
          {moves.map((move) => (
            <span>
              {move}
            </span>
          ))}
        </div>
      </div>
      <span className={Style.About_label}>Moves</span>

      <div className={Style.About_desc}>
        <p>{desc}</p>
      </div>

    </div>

  );
}
CardAbout.propTypes = {
  weight: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  moves: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
