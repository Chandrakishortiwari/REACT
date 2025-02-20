import { useState } from "react";
import Product from "./Components/Product";
import Props2 from "./Components/Props2";
import Counter from "./Components/Hooks/Counter";
import Mapproduct from "./Components/Map/Mapproduct";
import UseEffecthook from "./Components/Hooks/UseEffecthook";
import Fatch_data_api from "./Components/Fatch_api/Fatch_data_api";
import FilterProduct from "./Components/Filter/FilterProduct";
import FormHendel from "./Components/FromHendling/FormHendel";
import MultipalInputHendling from "./Components/FromHendling/MultipalInputHendling";
import RoutingMain from "./Components/Ruting/RoutingMain";
import PropsDrilling from "./Components/PropsDrilling/PropsDrilling";
import CreateNo_Off_button from "./Components/Pratices_Work/CreateNo_Off_button";
import UseReducer from "./Components/Hooks/UseReducer";


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

      {/* <Fatch_data_api /> */}

      {/* <FilterProduct /> */}

        {/* <FormHendel /> */}

        {/* <MultipalInputHendling /> */}
        {/* <RoutingMain /> */}
        {/* <PropsDrilling /> */}

        {/* <CreateNo_Off_button /> */}

      <UseReducer />


    </>
  );
}

export default App;
