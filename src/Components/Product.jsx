// import React from 'react'

// function Product(props) {
//   return (

//     <div>

//   {/* learn props */}

//      <h2>Mobile Name= {props.title}  </h2>
//      <hb3> Mobile brand = {props.Brand} </hb3>
//      <h4>Mobile Price = {props.Price}</h4>

//     </div>
//   )
// }

// export default Product

//   Object Destructure Method

import React from "react";

function Product({ title, Brand, Price, Ram, rom }) {
  return (
    <div>
      {/* Object Destructure Method */}

      <h2>Mobile Name= {title} </h2>
      <hb3> Mobile brand = {Brand} </hb3>
      <h4>Mobile Price = {Price}</h4>
      <h4>Mobile Rom = {Ram}</h4>
      <h4>Mobile Ram = {rom}</h4>
    </div>
  );
}

export default Product;
