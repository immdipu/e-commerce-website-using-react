import React from "react";
import { Hero, Contact, FeaturedProducts, Services } from "../components";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center">
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
