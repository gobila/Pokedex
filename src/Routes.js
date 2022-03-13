import React from 'react';
import { BrowserRouter, Route, Routes as SRoutes } from 'react-router-dom';

import Home from './pages/Home';
import Details from './pages/Details';

export default function Routes() {
  return (
    <BrowserRouter>
      <SRoutes>
        <Route element={<Home />} path="/" axact />
        <Route element={<Details />} path="/Details" />
      </SRoutes>
    </BrowserRouter>
  );
}
