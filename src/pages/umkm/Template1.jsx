/* eslint-disable react/prop-types */
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "../../components/componentUmkm/Navbar";
import Header from "../../components/componentUmkm/Header";
import About from "../../components/componentUmkm/About";
import Product from "../../components/componentUmkm/Product";
import Location from "../../components/componentUmkm/Location";
import Footer from "../../components/componentUmkm/Footer";

const Template1 = ({ data }) => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={data.icon || ""}
          />
          <title>Dewa Dewi Oleh-Oleh</title>
        </Helmet>
        <section className={data.color.backgroundColor}>
          <Navbar
            navbarTitle={data.navbarTitle}
            ctaLink={data.ctaLink}
            title={data.title}
            color={data.color}
            icon={data.icon}
          />
          <Header
            deskripsi={data.hero.deskripsi}
            tagLine={data.hero.tagLine}
            btn={data.hero.btn}
            btnText={data.hero.btnText}
            ctaLink={data.ctaLink}
            img={data.hero.img}
            color={data.color}
          />
          <main>
            <About
              data={data.about}
              color={data.color}
              ctaLink={data.ctaLink}
            />
            <Product product={data.product} color={data.color} />
            <Location location={data.location} />
            <Footer data={data.footer} title={data.title} color={data.color} />
          </main>
        </section>
      </HelmetProvider>
    </>
  );
};

export default Template1;
