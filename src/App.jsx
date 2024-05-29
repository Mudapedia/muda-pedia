import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/LoginAdmin";
import OnlyNotLogin from "./utililty/OnlyNotLogin";
import OnlyLogin from "./utililty/OnlyLogin";
import Blog from "./pages/Blog";
import DetailBlog from "./pages/DetailBlog";
import DewaDewi from "./pages/umkm/DewaDewi";

const dataUmkm = {
  "dewa-dewi": {
    title: "Dewa Dewi Oleh-Oleh",
    icon: null,
    navbarTitle: "Dewa Dewi Oleh-Oleh",
    ctaLink: "tel:6282142515874",
    navbarBgColor: "bg-[#fff]",
    btnColor: "bg-[#F87171]",
    btnHoverColor: "hover:bg-[#ef4444]",
    btnTextColor: "text-[#fff]",
    hero: {
      tagLine: "Oleh-Oleh Istimewa, untuk Orang Tersayang",
      deskripsi:
        "Pusat Oleh-Oleh Terlengkap dan Terlezat di rogojampi banyuwangi,rasakan kenikmatannya",
      btn: true,
      btnText: "Pesan sekarang",
    },
    about: {
      txt: "Lebih dari Sekedar Toko Oleh-Oleh",
      deskripsi:
        "Menjelajahi Banyuwangi tak lengkap tanpa mencicipi kekayaan kuliner dan kerajinannya yang khas. Di sinilah, Pusat Oleh-Oleh Dewa Dewi hadir sebagai gerbang utama untuk membawa pulang kenangan rasa dan budaya Banyuwangi yang tak terlupakan.",
      img: "/src/assets/dewa-dewi/IMG20240520104153.jpg",
      btn: true,
      btnText: "Order yuk",
    },
    product: {
      priceColor: "text-[#F87171]",
      data: [
        {
          name: "Madu mongso",
          deskripsi:
            "makanan ringan asal Ponorogo, Jawa Timur. Makanan ringan ini terbuat dari ketan hitam sebagai bahan dasarnya.",
          price: "Rp24.000",
          img: "/src/assets/dewa-dewi/IMG20240520104153.jpg ",
        },
        {
          name: "Pisar lumer",
          deskripsi:
            "jajanan kaki lima khas Indonesia yang terdiri dari pisang goreng yang diisi dengan cokelat leleh.",
          price: "Rp15.000",
          img: "/src/assets/dewa-dewi/pisang lumer.jpg",
        },
        {
          name: "Nastar nanas",
          deskripsi:
            "kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya.",
          price: "Rp20.000",
          img: "/src/assets/dewa-dewi/nastar.jpg",
        },
      ],
    },
    location:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17872.83557644627!2d114.36904324719598!3d-8.213929612844236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd145c0bdc88d6d%3A0x5258dd80434ae4d!2sWarung%20rujak%20mbak%20Atik!5e1!3m2!1sid!2sid!4v1716970642742!5m2!1sid!2sid",
    footer: {
      noHp: "0821-4251-5874",
      alamat: "Lemabang dewo, Rogojampi, Banyuwangi",
    },
  },
  de: {
    title: "KUY",
    icon: "/src/assets/3714842.jpg",
    navbarTitle: "KUY",
    navbarCtaLink: "tel:6282142515874",
    navbarBgColor: "bg-[#32a852]",
    btnColor: "bg-[#32a852]",
    btnHoverColor: "hover:bg-[#ef9444]",
    btnTextColor: "text-[#fff]",
  },
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin"
          element={
            <OnlyLogin>
              <Admin />
            </OnlyLogin>
          }
        />
        <Route
          path="/login-admin"
          element={
            <OnlyNotLogin>
              <LoginAdmin />
            </OnlyNotLogin>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:article" element={<DetailBlog />} />

        <Route
          path="/dewadewi"
          element={<DewaDewi data={dataUmkm["dewa-dewi"]} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
