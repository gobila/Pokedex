/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import PokeBox from './components/PokeBox';
import TagType from './components/TagType';
import Routes from './Routes';
import apiConnect from './service/apiConnect';

import './theme/global.scss';

function App() {
  return (
    <Routes />
  );
}

export default App;
