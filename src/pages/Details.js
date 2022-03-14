/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
// import logo from './logo.svg';
import '../App.css';
import PokeBox from '../components/PokeBox';
import TagType from '../components/TagType';
import apiConnect from '../service/apiConnect';

import '../theme/global.scss';

// eslint-disable-next-line react/prop-types
function Details() {
  const location = useLocation();
  const { name } = location.state;
  console.log(name);
  return (
    <div className="App">
      {name.name}
    </div>
  );
}

export default Details;
