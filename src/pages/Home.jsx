import { Button } from "@nextui-org/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// components
import Navbar from "../components/user/Navbar"
import Hero from "../components/user/landing page/Hero";
import AboutUs from "../components/user/landing page/AboutUs";
import Features from "../components/user/landing page/Features";
import Team from "../components/user/landing page/Team";
import Faq from "../components/user/landing page/Faq";

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
          <Features />
          <Team />
          <Blog />
          <Faq />
          <Footer/>
        </section>
    </HelmetProvider>
  );
};

export default Home;
