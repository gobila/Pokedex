import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.module.scss';

export default function Stats({ data }) {
  const base = [
    { name: 'hp', stats: data[0].base_stat },
    { name: 'atk', stats: data[1].base_stat },
    { name: 'def', stats: data[2].base_stat },
    { name: 'satk', stats: data[3].base_stat },
    { name: 'sdef', stats: data[4].base_stat },
    { name: 'spd', stats: data[5].base_stat },
  ];

  return (
    <div className={Style.container_stats}>
      {base.map((item) => (
        <table className={Style.stats}>
          <tr className={Style.stats_item}>
            <th className={Style.stats_text}>
              {item.name}
            </th>
            <td className={Style.stats_number}>
              {item.stats}
            </td>
            <progress className={Style.stats_bar} value={item.stats} max="250" />
          </tr>
        </table>
      ))}
    </div>
  );
}

Stats.propTypes = {
  data: PropTypes.objectOf.isRequired,
};
