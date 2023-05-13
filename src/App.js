import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import Features from "./components/Features";
import InfoSection from "./components/InfoSection";
import { InfoData } from "./data/InfoData";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import RecentRecipes from "./components/RecentRecipes";
import SignUpForm from "./components/SignUpForm";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} toggle={toggle} />
      <InfoSection {...InfoData} />
      <RecentRecipes />
      <Features />
      <Testimonials />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default App;
