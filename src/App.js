import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
      <Newsletter />
      <Cards />
      <Contact />
    </div>
  );
}

export default App;
