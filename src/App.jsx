import { useState } from "react";
import Product from "./Components/Product";
import Props2 from "./Components/Props2";
import Counter from "./Components/Hooks/Counter";
import Mapproduct from "./Components/Map/Mapproduct";
import UseEffecthook from "./Components/Hooks/UseEffecthook";
import Fatch_data_api from "./Components/Fatch_api/Fatch_data_api";

function App() {

  // props2 ke liye object create kiya tha
  // const obj = {
  //   title: "I Phone",
  //   Brand: "Apple",
  //   Price: "80000",
  //   Ram: "8gb",
  //   rom: "1tv",
  // };

  return (
    <>
      {/*  // Props

     <Product title= "Glaxy A14" Brand="Samsung" Price={18000} />
     <Product title= "I Phone" Brand="Apple" Price={80000} Ram="8gb" rom="1tv" />
      */}

      {/* <Props2 obj={obj} /> */}

      {/* <Counter /> */}

      {/* <Mapproduct /> */}

      {/* <UseEffecthook /> */}

      <Fatch_data_api />

        

    </>
  );
}

export default App;
