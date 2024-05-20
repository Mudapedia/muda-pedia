import { Button } from "@nextui-org/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// components
import Navbar from "../components/user/Navbar"
import Hero from "../components/user/landing page/Hero";
import AboutUs from "../components/user/landing page/AboutUs";
import Features from "../components/user/landing page/Features";
import Team from "../components/user/landing page/Team";
import Faq from "../components/user/landing page/Faq";
import Blog from "../components/user/landing page/Blog";
import Footer from "../components/user/Footer";
import Ourclient from "../components/user/landing page/Ourclient";

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
          <div className="grid gap-28">
            <Hero />
            <AboutUs/>
            <Features />
            <Team />
            <Blog />
            <Ourclient/>
            <Faq />
            <div>
              <Footer/>
            </div>
          </div>
        </section>
    </HelmetProvider>
  );
};

export default Home;
