import React from "react";

function FilterProduct() {
  const Product = [
    { id: 1, name: "ciku", age: 6 },
    { id: 2, name: "suku", age: 20 },
    { id: 3, name: "ccciku", age: 6 },
    { id: 4, name: "sssuku", age: 20 },
    { id: 5, name: "ssiku", age: 20 },
    { id: 6, name: "ccuku", age: 6 },
  ];

  const fileterdata = Product.filter((data) => data.age == 20);
  console.log(fileterdata);
  return (
    <div>
      {/* {Product.map((data)=> <div key= {data.id}>
        <h1> Name:{data.name}</h1>
        <h2> Name:{data.age}</h2>
        
      </div>)}   */}

      {fileterdata.map((Data) => (
        <div key={Data.id}>
          <h1>name : {Data.name}</h1>
          <h1>Age : {Data.age}</h1>
        </div>
      ))}
    </div>
  );
}

export default FilterProduct;
