import React from 'react';
import PropTypes from 'prop-types';
import '../../theme/colors.scss';

export default function ProgressBar({ bgcolor, completed }) {
  const containerStyles = {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
  };
  const stats = (100 * completed) / 255;
  const fillerStyles = {
    height: '100%',
    width: `${stats}%`,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  return (
    <div style={containerStyles}>
      <div className={bgcolor} style={fillerStyles} />
    </div>
  );
}

ProgressBar.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  completed: PropTypes.string.isRequired,
};
