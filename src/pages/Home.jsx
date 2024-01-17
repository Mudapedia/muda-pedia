import { Button } from "@nextui-org/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// components
import Navbar from "../components/user/Navbar"
import Hero from "../components/user/landing page/Hero";
import AboutUs from "../components/user/landing page/AboutUs";
import Features from "../components/user/landing page/Features";

const Home = () => {
  return (
    <HelmetProvider>
    <section> {/* wrapper html */}
      <Helmet>
        <title>Home</title>
      </Helmet>
    </section>

      <section> {/* wrapper body */}
        <Navbar />
        <Hero />
        <AboutUs/>
      </section>
    </HelmetProvider>
  );
};

export default Home;
