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
        <p className="poppins-s14">{`${weight} kg`}</p>
      </div>
      <span className={`${Style.About_label} poppins-s12`}>Weight</span>

      <div className={Style.About_height}>
        <img src="./icons/Height.svg" alt="as" className={Style.About_icon} />
        <p className="poppins-s14">{`${height} m`}</p>
      </div>
      <span className={`${Style.About_label} poppins-s12`}>Height</span>

      <div className={Style.About_moves}>
        <div className={Style.About_moves_text}>
          {moves.map((move) => (
            <span className="poppins-s14">
              {move}
            </span>
          ))}
        </div>
      </div>
      <span className={`${Style.About_label} poppins-s12`}>Moves</span>

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
