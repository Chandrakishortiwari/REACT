import { useState } from "react";
import Product from "./Components/Product";
import Props2 from "./Components/Props2";

function App() {
  const obj = {
    title: "I Phone",
    Brand: "Apple",
    Price: "80000",
    Ram: "8gb",
    rom: "1tv",
  };

  return (
    <>
      {/*  // Props

     <Product title= "Glaxy A14" Brand="Samsung" Price={18000} />
     <Product title= "I Phone" Brand="Apple" Price={80000} Ram="8gb" rom="1tv" />
      */}

      <Props2 obj={obj} />
    </>
  );
}

export default App;
