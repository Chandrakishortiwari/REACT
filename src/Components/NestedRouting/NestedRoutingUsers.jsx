import React from 'react'

import { Outlet, Link } from 'react-router';

function NestedRoutingUsers() {
  return (
   <div>
      <h2>Users Page</h2>
      <Link to="user1">Go to User 1</Link>
      
      <Outlet /> {/* Nested route yahin render hoga */}
    </div>
  )
}

export default NestedRoutingUsers