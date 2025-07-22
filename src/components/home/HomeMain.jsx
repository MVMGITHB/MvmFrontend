"use client";
import Clients from "../Clients";
import Home from "../Home";
import Hire from "../Hire";
import Result from "../Result";
import Services from "../Services/Services";
import Work from "../Partners/Work";

const HomeMain = () => {
  return (
    <>
        <Home />
      <Result />
      <Services />
      <Work />
      <Clients />
      <Hire />
    </>
  );
};

export default HomeMain;
