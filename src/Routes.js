/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  BrowserRouter, Route, Routes as SRoutes,
} from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

// eslint-disable-next-line react/prop-types
export default function Routes() {
  return (
    <BrowserRouter>
      <SRoutes>
        <Route element={<Home />} path="/" axact />
        <Route element={<Details />} path="/:pokemon" />
        <Route element={<Details />} path="/:id" />
      </SRoutes>
    </BrowserRouter>
  );
}
