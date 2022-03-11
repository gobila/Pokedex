import React from 'react';
import PropTypes from 'prop-types';
import './Style/index.scss';

export default function TagType({ children, type }) {
  return (
    <div className={`typeContainer type-${type}`}>
      <p className="poppins-s10 bold">
        {children}
      </p>
    </div>
  );
}

TagType.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
};
