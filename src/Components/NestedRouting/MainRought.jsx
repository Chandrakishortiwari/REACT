import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import NestedRoutingHome from './NestedRoutingHome'
import NestedRoutingAbout from './NestedRoutingAbout'
import NestedRoutingUsers from './NestedRoutingUsers'
import NestedRoutingUser1to1 from './NestedRoutingUser1to1'


function MainRought() {
  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<NestedRoutingHome />} />
          <Route path='/about' element={<NestedRoutingAbout />} />
            <Route path='/user' element={<NestedRoutingUsers  />} >
                <Route path='user1' element={<NestedRoutingUser1to1 />} />
                
            </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default MainRought