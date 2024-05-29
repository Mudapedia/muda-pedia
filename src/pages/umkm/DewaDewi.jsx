/* eslint-disable react/prop-types */
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "../../components/componentUmkm/Navbar";
import Header from "../../components/componentUmkm/Header";
import About from "../../components/componentUmkm/About";
import Product from "../../components/componentUmkm/Product";
import Location from "../../components/componentUmkm/Location";
import Footer from "../../components/componentUmkm/Footer";

const DewaDewi = ({ data }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="shortcut icon" type="image/x-icon" href={data.icon || ""} />
        <title>Dewa Dewi Oleh-Oleh</title>
      </Helmet>
      <Navbar
        navbarTitle={data.navbarTitle}
        ctaLink={data.ctaLink}
        title={data.title}
        btnColor={data.btnColor}
        btnHoverColor={data.btnHoverColor}
        icon={data.icon}
        btnTextColor={data.btnTextColor}
        navbarBgColor={data.navbarBgColor}
      />
      <Header
        btnColor={data.btnColor}
        btnHoverColor={data.btnHoverColor}
        btnTextColor={data.btnTextColor}
        deskripsi={data.hero.deskripsi}
        tagLine={data.hero.tagLine}
        btn={data.hero.btn}
        btnText={data.hero.btnText}
        ctaLink={data.ctaLink}
      />
      <main>
        <About
          data={data.about}
          btnColor={data.btnColor}
          btnHoverColor={data.btnHoverColor}
          btnTextColor={data.btnTextColor}
          ctaLink={data.ctaLink}
        />
        <Product product={data.product} />
        <Location location={data.location} />
        <Footer
          data={data.footer}
          title={data.title}
          btnColor={data.btnColor}
          btnTextColor={data.btnTextColor}
        />
      </main>
    </HelmetProvider>
  );
};

export default DewaDewi;
