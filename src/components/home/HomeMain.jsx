"use client";
import Clients from "../Clients";
import Home from "../Home";
import Hire from "../Hire";
import Result from "../Result";
import Services from "../Services/Services";
import Work from "../Partners/Work";
import Form from "../contact/Form";
import HelpBrands from "../Services/HomePageService";
import PartnersCarousel from "../crousel/crousel";
import Hero2 from "../TermsAndCondtions/Home2";

const HomeMain = () => {
  return (
    <>
      {/* <Home /> */}
      <Hero2 />
      {/* <Result /> */}
      <PartnersCarousel />
      <Services />
      {/* <Work /> */}
      {/* <Clients /> */}
      <HelpBrands />
      {/* <Hire /> */}
      <Form />
    </>
  );
};

export default HomeMain;
