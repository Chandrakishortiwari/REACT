import React from 'react'
import {BrowserRouter, Routes, Route } from "react-router";

import Contact from './Contact';
import Home from './Home';
import Team from './Team';
import Cource from './Cource';
import Cource_details from './Cource_details';

function RoutingMain() {
  return (
    <div>

        <BrowserRouter>
        <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/team" element={<Team />} />
      <Route path="/cource" element={<Cource />} />
      <Route path="/cource/:id" element={<Cource_details />} />
       
    </Routes>
        </BrowserRouter>

    </div>
  )
}

export default RoutingMain