const dataUmkmkuy = {
  "nama umkm": {
    title: "required",
    icon: null,
    navbarTitle: "required",
    ctaLink: null,
    keyword: [],

    color: {
      // required
      primary: "bg-[#F87171]",
      secondary: "bg-[#FD7382]",
      backgroundColor: "bg-white",
      hoverColor: "hover:bg-[#ef4444]",
      textColor: "text-[#010010]",
      btnTextColor: "text-white",
      accentColor: "text-[#F87171]",
    },

    hero: {
      tagLine: "Oleh-Oleh Istimewa, untuk Orang Tersayang",
      deskripsi: null,
      btn: true, // optional
      btnText: "Pesan sekarang",
      img: "/img/dewa-dewi/dewa.jpg",
    },
    about: {
      title: null,
      txt: "Lebih dari Sekedar Toko Oleh-Oleh",

      deskripsi: null, // optional
      img: "/img/dewa-dewi/IMG20240520104153.jpg",
      btn: true, // optional
      btnText: "Order yuk",
    },
    product: {
      title: "required",
      // required
      data: [
        {
          name: "Madu mongso",
          deskripsi:
            "makanan ringan asal Ponorogo, Jawa Timur. Makanan ringan ini terbuat dari ketan hitam sebagai bahan dasarnya.",
          price: "Rp24.000",
          img: "/img/dewa-dewi/IMG20240520104153.jpg",
        },
        {
          name: "Pisar lumer",
          deskripsi:
            "jajanan kaki lima khas Indonesia yang terdiri dari pisang goreng yang diisi dengan cokelat leleh.",
          price: "Rp15.000",
          img: "/img/dewa-dewi/pisang lumer.jpg",
        },
        {
          name: "Nastar nanas",
          deskripsi:
            "kue kering dari adonan tepung terigu, mentega, dan telur yang diisi dengan selai nanas, cokelat, maupun rasa lainnya.",
          price: "Rp20.000",
          img: "/img/dewa-dewi/nastar.jpg",
        },
      ],
    },
    location: null,
    footer: {
      noHp: null,
      alamat: null,
    },
  },
};

export default dataUmkmkuy;
