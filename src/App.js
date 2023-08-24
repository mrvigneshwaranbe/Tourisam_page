import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CarouselComponent from "./CarouselComponent";
import Chennai from "./Chennai";
import Rameshwaram from "./Rameshwaram";
import Kodaikanal from "./Kodaikanal";
import Ooty from "./Ooty";
import Kanyakumari from "./Kanyakumari";
import Kumbakonam from "./Kumbakonam";
import Madurai from "./Madurai";
import Yercaud from "./Yarcaud";
import Theni from "./Theni";
import Hogenakkal from "./Hogenakkal";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <CarouselComponent></CarouselComponent>
      <Chennai></Chennai>
      <Rameshwaram></Rameshwaram>
      <Kodaikanal></Kodaikanal>
      <Ooty></Ooty>
      <Kanyakumari></Kanyakumari>
      <Kumbakonam></Kumbakonam>
      <Madurai></Madurai>
      <Yercaud></Yercaud>
      <Theni></Theni>
      <Hogenakkal></Hogenakkal>
    </BrowserRouter>
  );
};

export default App;