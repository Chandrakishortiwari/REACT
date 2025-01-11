import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router";

import Contact from './Contact';
import Home from './Home';

function RoutingMain() {
  return (
    <div>

        <BrowserRouter>
        <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/contact" element={<Contact />} />
   
    </Routes>
        </BrowserRouter>

    </div>
  )
}

export default RoutingMain