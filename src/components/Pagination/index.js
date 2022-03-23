import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination({ next }) {
  return (

    <button type="button" onClick={next}>
      proximo
    </button>
  );
}

Pagination.propTypes = {
  next: PropTypes.func.isRequired,
};
