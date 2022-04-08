/* eslint-disable no-unused-vars */
import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
// import logo from './logo.svg';
import './App.css';
import Routes from './Routes';
import { UserContext, UserContextProvider } from './service/Context';

import './theme/global.scss';

function App() {
  return (
    <UserContextProvider>
      <Routes />
    </UserContextProvider>
  );
}

export default App;
