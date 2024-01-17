import { Button } from "@nextui-org/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// components
import Navbar1 from "../components/user/Navbar"
import Hero from "../components/user/landing page/Hero";
import AboutUs from "../components/user/landing page/AboutUs";
import Features from "../components/user/landing page/Features";
import Team from "../components/user/landing page/Team";
import Faq from "../components/user/landing page/Faq";

const Home = () => {
  return (
    <section> {/* wrapper html */}
      {/* <Helmet>
        <title>Home</title>
      </Helmet> */}

      <section> {/* wrapper body */}
        <Navbar1 />
        {/* <Hero />
        <AboutUs /> */}
        {/* <Features /> */}
        {/* <Team/> */}
        <Faq/>
      </section>
      
    </section>
  );
};

export default Home;
