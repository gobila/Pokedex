import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.scss';

// eslint-disable-next-line no-unused-vars
export default function TagType({ type }) {
  return (
    <div className={`typeContainer type-${type.name}`}>
      <p className="poppins-s12 bold">
        {type.name}
      </p>
    </div>
  );
}

TagType.propTypes = {
  type: PropTypes.string.isRequired,
};
