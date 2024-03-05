import React from "react";

import Hero from "@/app/components/Hero";
import Showcase from "@/app/components/Showcase/Showcase";
import Location from "@/app/components/Location/Location";
import Footer from "@/app/components/Footer";

const Page = () => {
  return (
    <div>
      {/*<Hero />*/}
      <Hero />
      <Showcase />
      <Location />
      <Footer />
    </div>
  );
};

export default Page;
