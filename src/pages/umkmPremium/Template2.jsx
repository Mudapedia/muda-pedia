/* eslint-disable react/prop-types */
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "../../components/componentUmkm/Navbar";
import Header from "../../components/componentUmkm/Header";
import About from "../../components/componentUmkm/About";
import ProductPremium from "../../components/componentUmkm/ProductPremium";
import Location from "../../components/componentUmkm/Location";
import Footer from "../../components/componentUmkm/Footer";
import KeranjangFloating from "../../components/componentUmkm/keranjangFloating";
import { useState } from "react";

const Template2 = ({ data }) => {
  const [barang, setBarang] = useState([]);
  const [totalBarang, setTotalBarang] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href={data.icon || ""}
          />
          <title>{data.title}</title>
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
            <ProductPremium
              product={data.product}
              color={data.color}
              barang={barang}
              setBarang={setBarang}
              setTotalBarang={setTotalBarang}
              totalHarga={totalHarga}
              setTotalHarga={setTotalHarga}
            />
            <About
              data={data.about}
              color={data.color}
              ctaLink={data.ctaLink}
            />
            <Location location={data.location} />
            <Footer
              data={data.footer}
              title={data.title}
              color={data.color}
              icon={data.icon}
              ctaLink={data.ctaLink}
            />
            <KeranjangFloating
              color={data.color}
              barang={barang}
              setBarang={setBarang}
              totalBarang={totalBarang}
              setTotalBarang={setTotalBarang}
              totalHarga={totalHarga}
              setTotalHarga={setTotalHarga}
            />
          </main>
        </section>
      </HelmetProvider>
    </>
  );
};

export default Template2;
