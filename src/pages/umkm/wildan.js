const dataWildan = {
    "bakso-dan-teh-jumbo": {
      title: "Bakso Dan Teh Jumbo",
      icon: null,
      navbarTitle: "Bakso Dan Teh Jumbo",
      ctaLink: null,
        keyword: [
          "Indonesian meatballs",
          "Street food",
          "Traditional Indonesian cuisine",
          "Bakso soup",
          "Beef meatballs",
          "Chicken meatballs",
          "Mie bakso",
          "Bakso recipe",
          "Bakso vendor",
          "Bakso restaurant",
          "Bakso cart"
      ]

      ,
      color: {
        // required
        primary: "bg-[#ffe124]",
        secondary: "bg-[#ffe751]",
        backgroundColor: "bg-[#faf1f1]",
        hoverColor: "hover:bg-[#ef4444]",
        textColor: "text-[#180c0c]",
        btnTextColor: "text-white",
        accentColor: "text-[#e85a5a]",
      },

      hero: {
        tagLine: "Bakso & Teh Jumbo Duo Nikmat!",
        deskripsi: "Temukan cita rasa asli Indonesia dengan bakso lezat kami!, dan Puaskan dahaga Anda dengan kesegaran terbaik dari Teh Jumbo!",
        btn: false, // optional
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1719885604/umkm/bakso%20dan%20teh%20jumbo/WhatsApp_Image_2024-07-01_at_13.17.40_a08427cd_rzttcd.jpg",
      },
      about: {
        title: null,
        txt: "Jangan lewatkan Kelezatan bakso dan kesegaran teh kami!",
  
        deskripsi: "Segera beli sekarang dan nikmati kelezatan bakso dan kesegaran di setiap tegukannya teh jumbo kami. Ayo, manjakan lidah Anda dengan bakso dan teh jumbo terbaik kami", // optional
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1719885608/umkm/bakso%20dan%20teh%20jumbo/WhatsApp_Image_2024-07-01_at_13.16.26_528f66ac_r4mekp.jpg",
        btn: false, // optional
        btnText: "Pesan Sekarang",
      },
      product: {
        title: "Produk ter the best kami!",
        // required
        data: [
          {
            name: "BAKSO",
            deskripsi:
              "Rasa Original",
            price: null,
            img: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2023/07/25041221/ini-resep-kuah-bakso-sap-yang-mudah-dibuat-di-rumah.jpg",
          },
          {
            name: "TEH JUMBO",
            deskripsi:
              "Teh dengan ukuran jumbo",
            price: null,
            img: "data:image/jpeg;base64,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",
          },
        ],
      },
      location: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.389821493706!2d114.14847557501128!3d-8.36325849167385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMjEnNDcuNyJTIDExNMKwMDknMDMuOCJF!5e0!3m2!1sid!2sid!4v1720617490316!5m2!1sid!2sid",
      footer: {
        alamat: null,
      },
    },
    "rujak-dan-es-krim": {
      title: "Rujak Dan Es Krim",
      icon: null,
      navbarTitle: "Rujak Dan Es Krim",
      ctaLink: null,
        keyword: [
          "Indonesian fruit salad",
          "Spicy fruit salad",
          "Traditional Indonesian snack",
          "Rujak sauce",
          "Peanut sauce",
          "Street food",
          "Rujak recipe",
          "Ice cream",
          "Frozen dessert",
          "Creamy treat",
          "Indonesian ice cream",
          "Traditional ice cream",
      ]
      

      ,
      color: {
        // required
        primary: "bg-[#6e8bff]",
        secondary: "bg-[#b0abff]",
        backgroundColor: "bg-[#faf1f1]",
        hoverColor: "hover:bg-[#ef4444]",
        textColor: "text-[#180c0c]",
        btnTextColor: "text-white",
        accentColor: "text-[#e85a5a]",
      },

      hero: {
        tagLine: "Rujak dan es krim kombinasi yang sempurna!",
        deskripsi: "Bersantailah dan manjakan diri Anda dengan es krim kami yang lezat, dan dipadukan dengan berbagai buah segar dan berair dengan saus kacang asam jawa yang pedas!",
        btn: false, // optional
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1719889311/umkm/rujak%20dan%20es%20krim/WhatsApp_Image_2024-07-01_at_13.26.06_943e30b8_y688vf.jpg",
      },
      about: {
        title: null,
        txt: "Ayo, cobain dan nikmati sendiri rujak es krim nya!",
  
        deskripsi: "Segera beli sekarang dan nikmati kelezatan dan kelembutan dari eskrim kami, dan dengan berbagai buah segar dan berair dengan saus kacang asam jawa yang pedas dan nikmat", // optional
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1720679924/umkm/rujak%20dan%20es%20krim/rujak_ioekso.jpg",
        btn: false, // optional
        btnText: "Pesan Sekarang",
      },
      product: {
        title: "Produk terlaris",
        // required
        data: [
          {
            name: "ES KRIM RUJAK",
            deskripsi:
              "Es krim ditambah dengan rujak",
            price: null,
            img: "https://wisatanews.id/wp-content/uploads/2023/04/1682776242651.jpg",
          },
          {
            name: "ES Krim",
            deskripsi:
              "rasa stroberi",
            price: null,
            img: "https://sayurbox-blog-stage.s3.amazonaws.com/uploads/2020/02/sayurbox-ice-cream-strawberry-savingdessert.jpg",
          },
          {
            name: "Rujak",
            deskripsi:
              "rasa original",
            price: null,
            img: "https://i.pinimg.com/originals/f9/ca/0c/f9ca0c09bc2b9ba4f96c93cf52edd811.jpg",
          },
        ],
      },
      location: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.8447246132523!2d114.36673817500959!3d-8.218365991814114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTMnMDYuMSJTIDExNMKwMjInMDkuNSJF!5e0!3m2!1sid!2sid!4v1720679225286!5m2!1sid!2sid",
      footer: {
        alamat: null,
      },
    },
    "molen-pak-arifin": {
      title: "Molen Pak Arifin",
      icon: null,
      navbarTitle: "Molen Pak Arifin",
      ctaLink: null,
        keyword: [
          "Molen Pak Arifin",
          "Indonesian pastry",
          "Traditional molen",
          "Banana molen",
          "Street food",
          "Famous molen vendor",
          "Pak Arifin's molen",
          "Sweet pastry",
          "Crispy molen",
          "Banana roll",
          "Molen recipe",
          "Bakery",
          "Indonesian snack",
          "Fried pastry",
          "Popular molen",
          "Dessert",
          "Snack vendor",
          "Local delicacy"
      ]

      ,
      color: {
        // required
        primary: "bg-[#6e8bff]",
        secondary: "bg-[#b0abff]",
        backgroundColor: "bg-[#faf1f1]",
        hoverColor: "hover:bg-[#ef4444]",
        textColor: "text-[#180c0c]",
        btnTextColor: "text-white",
        accentColor: "text-[#e85a5a]",
      },

      hero: {
        tagLine: "Rasakan cita rasa molen yang luar biasa!",
        deskripsi: "Nikmati cita rasa Molen Pak Arifin yang lezat, dan Setiap gigitan menghadirkan perpaduan sempurna antara kerenyahan dan rasa manis",
        btn: false, // optional
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1719889958/umkm/molen%20pak%20arifin/WhatsApp_Image_2024-07-01_at_13.32.01_c8cda4d8_vscmgr.jpg",
      },
      about: {
        title: null,
        txt: "Ayo, cobain dan nikmati sendiri Molen dengan berbagai rasa!",
  
        deskripsi: "Segera beli sekarang dan nikmati sebagai camilan atau hidangan penutup, molen kami menjanjikan cita rasa dari berbagai isian rasa.", // optional
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1719889970/umkm/molen%20pak%20arifin/WhatsApp_Image_2024-07-01_at_13.32.00_09733de7_xwr3gw.jpg",
        btn: false, // optional
        btnText: "Pesan Sekarang",
      },
      product: {
        title: "Produk terlaris",
        // required
        data: [
          {
            name: "Molen Ori",
            deskripsi:
              "rasa original",
            price: null,
            img: "https://i.ytimg.com/vi/GeGi9VvliGg/maxresdefault.jpg",
          },
          {
            name: "Molen Coklat",
            deskripsi:
              "Rasa Coklat",
            price: null,
            img: "https://down-id.img.susercontent.com/file/ad0200bc0f851b6c184ea6c8680bb784",
          },
          {
            name: "Molen Keju",
            deskripsi:
              "rasa Keju",
            price: null,
            img: "https://img-global.cpcdn.com/recipes/853f349845df1e86/680x482cq70/molen-pisang-keju-mini-foto-resep-utama.jpg",
          },
        ],
      },
      location: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.896428019143!2d114.34694157500961!3d-8.213170191819188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTInNDcuNCJTIDExNMKwMjAnNTguMyJF!5e0!3m2!1sid!2sid!4v1720681443896!5m2!1sid!2sid",
      footer: {
        alamat: null,
      },
    },
    "kue-basah": {
      title: "Kue Basah Mba Dita",
      icon: null,
      navbarTitle: "Kue Basah Mba Dita",
      ctaLink: null,
        keyword: [
          "Kue Basah Mba Dila",
          "Indonesian wet cakes",
          "Traditional kue basah",
          "Assorted kue basah",
          "Mba Dila's kue basah",
          "Indonesian desserts",
          "Sweet treats",
          "Local delicacies",
          "Popular kue basah vendor",
          "Kue basah recipe",
          "Authentic Indonesian snacks",
          "Freshly made kue basah",
          "Steamed cakes",
          "Colorful Indonesian cakes",
          "Traditional market snacks",
          "Homemade kue basah"
      ]
      

      ,
      color: {
        // required
        primary: "bg-[#b4ff8f]",
        secondary: "bg-[#c3ffa5]",
        backgroundColor: "bg-[#faf1f1]",
        hoverColor: "hover:bg-[#ef4444]",
        textColor: "text-[#180c0c]",
        btnTextColor: "text-white",
        accentColor: "text-[#e85a5a]",
      },

      hero: {
        tagLine: "Rasakan Kelezatan Kue Basah Kami!",
        deskripsi: "Nikmati cita rasa Kue Basah yang lezat, dan memiliki jenis yang bermacam-macam",
        btn: false, // optional
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1719890337/umkm/kue%20basah/WhatsApp_Image_2024-07-01_at_13.39.54_81b7d68d_ll4pn9.jpg",
      },
      about: {
        title: null,
        txt: "Ayo, cobain dan nikmati berbagai kue basah kami!",
  
        deskripsi: "Segera beli sekarang dan nikmati rasa kue basah yang Authentic berbeda dengan yang lain!", // optional
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1719890337/umkm/kue%20basah/WhatsApp_Image_2024-07-01_at_13.39.56_bbb97d21_tzs5j2.jpg",
        btn: false, // optional
        btnText: "Pesan Sekarang",
      },
      product: {
        title: "Produk terlaris",
        // required
        data: [
          {
            name: "Risoles",
            deskripsi:
              "rasa original",
            price: null,
            img: "https://www.masakapahariini.com/wp-content/uploads/2023/06/risoles-ragout.jpeg",
          },
          {
            name: "Putu Ayu",
            deskripsi:
              "Rasa original",
            price: null,
            img: "https://asset.kompas.com/crops/CV1ZqnOWaLEBZTe1YWaFazA7ePw=/44x2:621x386/750x500/data/photo/2020/12/11/5fd32a67ca9db.jpg",
          },
          {
            name: "Kue Lapis",
            deskripsi:
              "rasa original",
            price: null,
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Kue_Lapis.jpg/1200px-Kue_Lapis.jpg",
          },
        ],
      },
      location: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.7477522488034!2d114.35756057500966!3d-8.22810219180469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTMnNDEuMiJTIDExNMKwMjEnMzYuNSJF!5e0!3m2!1sid!2sid!4v1720684286669!5m2!1sid!2sid",
      footer: {
        alamat: null,
      },
    },
    "es-teler-sultan": {
      title: "Es Teler Sultan",
      icon: null,
      navbarTitle: "Es Teler Sultan",
      ctaLink: null,
        keyword: [
          "Es Teler Sultan",
          "Indonesian fruit cocktail",
          "Refreshing dessert",
          "Tropical drink",
          "Es teler recipe",
          "Es teler vendor",
          "Exotic fruits",
          "Coconut milk drink",
          "Avocado dessert",
          "Jackfruit cocktail",
          "Sweetened condensed milk",
          "Traditional Indonesian drink",
          "Summer refreshment",
          "Popular es teler",
          "Cool dessert",
          "Fresh fruit drink",
          "Local favorite",
          "Ice-cold treat"
      ]
      
      

      ,
      color: {
        // required
        primary: "bg-[#a1ff72]",
        secondary: "bg-[#b4ff8f]",
        backgroundColor: "bg-[#faf1f1]",
        hoverColor: "hover:bg-[#ef4444]",
        textColor: "text-[#180c0c]",
        btnTextColor: "text-white",
        accentColor: "text-[#e85a5a]",
      },

      hero: {
        tagLine: "Rasakan Kesegaran Es Teler kami!",
        deskripsi: "Nikmati sensai kesegaran setiap sendokan dari es teler, dan nikmati kesegaran dari buah kami",
        btn: false, // optional
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1720684962/umkm/es-teler-sultan/WhatsApp_Image_2024-07-11_at_14.59.27_d03b3b66_zh18tk.jpg",
      },
      about: {
        title: null,
        txt: "Ayo, cobain dan nikmati kesegaran Es Teler kami!",
  
        deskripsi: "Segera beli sekarang dan hilangkan dahaga anda dengan meminum Es Teler kami", // optional
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1720684963/umkm/es-teler-sultan/WhatsApp_Image_2024-07-11_at_14.59.27_9585e675_qi1v9n.jpg",
        btn: false, // optional
        btnText: "Pesan Sekarang",
      },
      product: {
        title: "Produk terlaris",
        // required
        data: [
          {
            name: "Es Teler",
            deskripsi:
              "rasa original",
            price: null,
            img: "https://lh4.googleusercontent.com/proxy/prMcBz7prioRjwyc4jDLVxU9Mq-FfzNX5UBOcEJBFqJLKy19e5uup5-bKlZFKqS6baQJOlH28giWHVzlGNSvi9Ip5iD2H2UU5q1ixW5d5ARQoBTZRcvh8XnXlg",
          },
          {
            name: "Es Buah",
            deskripsi:
              "Rasa original",
            price: null,
            img: "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Daftar-Resep-Es-Buah-yang-Mudah-dan-Enak.jpg",
          },
        ],
      },
      location: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.7477522488034!2d114.35756057500966!3d-8.22810219180469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTMnNDEuMiJTIDExNMKwMjEnMzYuNSJF!5e0!3m2!1sid!2sid!4v1720685531528!5m2!1sid!2sid",
      footer: {
        alamat: null,
      },
    },
    "macam-macam-pisang": {
      title: "Macam Macam Pisang",
      icon: null,
      navbarTitle: "Macam Macam Pisang",
      ctaLink: null,
        keyword: [
          "Toko Pisang",
          "Banana shop",
          "Banana store",
          "Fresh bananas",
          "Banana vendor",
          "Banana varieties",
          "Ripe bananas",
          "Banana products",
          "Banana snacks",
          "Local banana shop",
          "Banana desserts",
          "Banana recipes",
          "Banana bread",
          "Banana fritters",
          "Banana smoothie",
          "Organic bananas",
          "Tropical fruit store",
          "Banana supplier"
      ]
      
      
      

      ,
      color: {
        // required
        primary: "bg-[#72deff]",
        secondary: "bg-[#fff678]",
        backgroundColor: "bg-[#faf1f1]",
        hoverColor: "hover:bg-[#ef4444]",
        textColor: "text-[#180c0c]",
        btnTextColor: "text-white",
        accentColor: "text-[#e85a5a]",
      },

      hero: {
        tagLine: "Rasakan Buah Buah Fresh dan segar Kami!",
        deskripsi: "Nikmati sensai Menikmati dan menyantap buah buahan fresh dan segar kami",
        btn: false, // optional
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1719888414/umkm/macam%20macam%20pisang/WhatsApp_Image_2024-07-01_at_13.22.40_e6a5b7b5_zeukzr.jpg",
      },
      about: {
        title: null,
        txt: "Ayo, cobain dan nikmati sensai buah buahan pilihan yang fresh dan segar",
  
        deskripsi: "Segera beli sekarang dan nikmati sendiri buah buahan kami!", // optional
        img: "https://res.cloudinary.com/dtiyid0pi/image/upload/v1720684963/umkm/es-teler-sultan/WhatsApp_Image_2024-07-11_at_14.59.27_9585e675_qi1v9n.jpg",
        btn: false, // optional
        btnText: "Pesan Sekarang",
      },
      product: {
        title: "Produk terlaris",
        // required
        data: [
          {
            name: "Pisang buah",
            deskripsi:
              "Fresh dan segar",
            price: null,
            img: "https://asset.kompas.com/crops/QtJW_z5QqXKytGp49CcMtVXNcVM=/0x0:612x408/1200x800/data/photo/2023/03/10/640a9a7b1ce3d.jpeg",
          },
          {
            name: "Pisang Susu",
            deskripsi:
              "Fresh dan Segar",
            price: null,
            img: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/25/ef775fa2-e256-48bb-901e-a57f2108f115.jpg",
          },
        ],
      },
      location: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3948.8139028688383!2d114.35320317500967!3d-8.221461791811093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTMnMTcuMyJTIDExNMKwMjEnMjAuOCJF!5e0!3m2!1sid!2sid!4v1720686278833!5m2!1sid!2sid",
      footer: {
        alamat: null,
      },
    },
    "dadar-gulung-mbak-anis": {
      title: "Dadar Gulung Mbak Anis",
      icon: null,
      navbarTitle: "Dadar Gulung Mbak Anis",
      ctaLink: "https://wa.me/62881036025248",
        keyword: [
          "Dadar Gulung Hijau Isi Kelapa Mbak Anis",
          "Dadar Gulung Coklat Isi Pisang dan Coklat Mbak Anis",
          "Kue Dadar Gulung Tradisional Mbak Anis",
          "Jual Dadar Gulung Hijau Isi Kelapa",
          "Dadar Gulung Coklat Pisang Banyuwangi",
          "Kue Tradisional Dadar Gulung Mbak Anis",
          "Pesan Dadar Gulung Mbak Anis Online",
          "Dadar Gulung Hijau dan Coklat Mbak Anis",
          "Kue Dadar Gulung Banyuwangi Mbak Anis",
          "Dadar Gulung Isi Kelapa dan Pisang Coklat",
          "Kue Tradisional Dadar Gulung Hijau Banyuwangi",
          "Jual Kue Dadar Gulung Mbak Anis",
          "Dadar Gulung Coklat Pisang Enak Banyuwangi",
          "Dadar Gulung Hijau Isi Kelapa Segar",
          "Lezatnya Dadar Gulung Coklat Pisang Mbak Anis",
        ],
      
      color: {
        primary: "bg-[#65A637]",
        secondary: "bg-[#95e799]",
        backgroundColor: "bg-[#fbfdfa]",
        hoverColor: "hover:bg-[#53733C]",
        textColor: "text-[#010010]",
        btnTextColor: "text-[#ffffff]",
        accentColor: "text-[#65A637]",
      },

      hero: {
        tagLine:
          "Dadar Gulung Hijau dan Coklat Buatan Mbak Anis, Otentik dan Menggugah Selera",
        deskripsi:
          "Setiap gigitan memberikan kelezatan yang menggugah selera, sempurna untuk dinikmati kapan saja",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726648503/logo_nie1yr.png",
      },
      about: {
        title: "Tentang",
        txt: "Kue Buatan Tangan yang Menghidupkan Kembali Rasa Otentik",
        deskripsi:
          "Mbak Anis menyajikan kue dadar gulung dengan sentuhan tangan yang penuh perhatian, menghidupkan kembali cita rasa otentik yang memikat",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726648503/logo_nie1yr.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Dadar Gulung Hijau",
            deskripsi:
              "Dadar gulung hijau dengan aroma pandan yang khas dan isian kelapa parut manis. Kue tradisional ini menghadirkan tekstur lembut dengan rasa manis gurih yang menggugah selera. Nikmati kelezatan autentik setiap kali menggigit",
            price: "Rp1.500/pcs",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726648501/dadar_gulung_hijau_ygv1zu.jpg",
          },
          {
            name: "Dadar Gulung Coklat",
            deskripsi:
              "Dadar gulung coklat dengan isian pisang dan coklat yang lumer di mulut. Perpaduan manisnya pisang dan coklat memberikan sensasi nikmat yang sempurna untuk camilan atau hidangan penutup",
            price: "Rp1.500/pcs",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726648075/dadar_gulung_coklat_jd4dqn.jpg",
          },
          {
            name: "Dadar Gulung Hijau dan Coklat",
            deskripsi:
              "Kombinasi dadar gulung hijau isi kelapa dan dadar gulung coklat isi pisang-coklat menawarkan dua sensasi rasa dalam satu sajian. Kue tradisional dengan rasa manis dan gurih ini cocok untuk segala acara, menghadirkan kenikmatan yang otentik dan memuaskan",
            price: "Rp1.500/pcs",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726648076/dadar_gulung_coklat._dan_hijaujpeg_cdgjsi.jpg",
          },
        ],
      },
      location: 
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.900063980754!2d114.36732837381295!3d-8.212804682405746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1452fdf4b9c7d%3A0x2ca999baa6cffa5d!2sJl.%20Serayu%2C%20Kec.%20Banyuwangi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur%2068415!5e0!3m2!1sid!2sid!4v1726647417919!5m2!1sid!2sid",
      footer: {
        noHp: "08881036025248",
        alamat:
          "JL. SERAYU, Desa/Kelurahan Panderejo, Kec. Banyuwangi, Kab. Banyuwangi",
      },
    },
    "angkringan-teras-klatak": {
      title: "Angkringan Teras",
      icon: null,
      navbarTitle: "Angkringan Teras",
      ctaLink: "https://wa.me/6287861697039",
        keyword: [
          "Angkringan Teras Aneka Makanan dan Minuman",
          "Aneka Camilan Angkringan Teras",
          "Menu Lengkap Angkringan Teras",
          "Makanan dan Minuman Murah di Angkringan Teras",
          "Aneka Makanan Tradisional di Angkringan Teras",
          "Minuman Segar dan Camilan Angkringan Teras",
          "Camilan Gurih dan Manis di Angkringan Teras",
          "Pilihan Menu Angkringan Teras yang Lezat",
          "Angkringan Teras: Tempat Nongkrong dengan Aneka Camilan",
          "Aneka Minuman Segar di Angkringan Teras",
          "Angkringan Teras Makanan Tradisional dan Modern",
          "Nikmati Aneka Makanan dan Camilan di Angkringan Teras",
          "Minuman dan Camilan Lezat Angkringan Teras",
          "Pilihan Menu Murah dan Lezat di Angkringan Teras",
          "Camilan Tradisional dan Minuman di Angkringan Teras",
        ],
      
      color: {
        primary: "bg-[#593B02]",
        secondary: "bg-[#D9AE30]",
        backgroundColor: "bg-[#fefcf7]",
        hoverColor: "hover:bg-[#322101]",
        textColor: "text-[#010010]",
        btnTextColor: "text-[#ffffff]",
        accentColor: "text-[#593B02]",
      },

      hero: {
        tagLine: "Kenikmatan Camilan dan Minuman Segar di Angkringan Teras",
        deskripsi:
          "Temukan suasana hangat dan ramah, sempurna untuk bersantai bersama teman dan keluarga sambil menikmati hidangan favorit Anda",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727005672/hero_image_qzlhme.jpg",
      },
      about: {
        title: "Tentang",
        txt: "Hangatnya Suasana, Kelezatan Makanan: Selamat Datang di Angkringan Teras",
        deskripsi:
          "Di Angkringan Teras, kami menciptakan suasana yang hangat dan ramah untuk semua pengunjung. Dengan berbagai pilihan makanan dan minuman yang lezat, setiap hidangan disiapkan dengan cinta dan perhatian",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727005674/menu_zhbhke.jpg",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Nasi Tempong",
            deskripsi:
              "Nikmati kelezatan tempong dengan empat varian pilihan: ayam, lele, telur, dan empela ati. Setiap tempong disajikan dengan bumbu khas yang menggugah selera, cocok untuk menemani waktu bersantai Anda ",
            price: "Rp11.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727005674/tempong_ojwiwu.jpg",
          },
          {
            name: "Es Capcin",
            deskripsi:
              "Dikenal karena kesegaran dan manisnya, es capcin menjadi pilihan sempurna untuk menghilangkan dahaga di hari yang panas",
            price: "Rp6.000/10.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727005671/es_capcin_la5mjk.jpg",
          },
          {
            name: "Tahu Petis",
            deskripsi:
              "Tahu petis adalah camilan yang terbuat dari tahu yang digoreng renyah, disajikan dengan petis yang gurih dan pedas. Dengan tekstur yang crispy dan rasa yang kaya, tahu petis menjadi pilihan yang sempurna untuk menemani waktu santai Anda",
            price: "Rp8.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727005668/tahu_petis_irvobf.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.308476673726!2d114.3812312763604!3d-8.171645163690089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1458da719d385%3A0x106e9c95d1ec5c03!2sSONAS%20KLATAK%20RAYA!5e0!3m2!1sid!2sid!4v1727006727056!5m2!1sid!2sid",
      footer: {
        noHp: "0887861697039",
        alamat:
          "Perumahan Sonas Klatak Raya Block.1718, Desa/Kelurahan Klatak, Kec. Kalipuro, Kab. Banyuwangi",
      },
    },
    "dawet-kendil-bubur-sumsum": {
      title: "Dawet Kendil Bubur Sumsum",
      icon: null,
      navbarTitle: "Dawet Kendil Bubur Sumsum",
      ctaLink: "https://wa.me/6283135951943",
        keyword: [
          "Dawet Kendil Bubur Sumbum",
          "Es Dawet Khas dengan Bubur Sumsum",
          "Dawet Gula, Santan, Cendol, dan Bubur Sumsum",
          "Es Dawet Tradisional dengan Tape Ketan Hijau",
          "Es Dawet Segar dengan Mutiara dan Cendol Hijau",
          "Menu Es Dawet Komplit Gula Aren dan Bubur Sumsum",
          "Es Dawet Kendil dengan Santan dan Es Batu Segar",
          "UMKM Minuman Segar Tradisional Dawet Kendil",
          "Es Dawet Bubur Sumsum Banyuwangi",
          "Es Dawet Kendil Bubur Sumsum Tradisional",
          "Es Dawet Kendil Sumsum Tradisional",
          "Dawet Bubur Sumsum dan Cendol Hijau",
          "Minuman Segar Dawet Kendil Bubur Sumbum",
          "Es Dawet Khas dengan Tape Ketan dan Mutiara",
          "Dawet Kendil dengan Gula Aren dan Santan Segar",
          "Es Dawet Komplit dengan Bubur Sumsum dan Cendol",
          "Minuman Dawet Kendil Segar dengan Es Batu",
          "Dawet Kendil Bubur Sumsum Cendol Hijau dan Tape",
          "Es Dawet Kendil Komplit Khas Jawa",
          "UMKM Dawet Kendil Bubur Sumsum Terbaik",
        ],
      
      color: {
        primary: "bg-[#03A64A]",
        secondary: "bg-[#beb177]",
        backgroundColor: "bg-[#f9fcfb]",
        hoverColor: "hover:bg-[#007f37]",
        textColor: "text-[#010010]",
        btnTextColor: "text-[#ffffff]",
        accentColor: "text-[#8C5B49]",
      },

      hero: {
        tagLine: "Nikmatnya Dawet Kendil dengan Sentuhan Bubur Sumsum",
        deskripsi:
          "Nikmati kesegaran sejati dengan Dawet Kendil yang memadukan kelembutan bubur sumsum, manisnya gula aren, dan segarnya santan",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726322458/rombong_depan_qiv7yz.jpg",
      },
      about: {
        title: "Tentang",
        txt: "Kehangatan Tradisi dalam Setiap Porsi",
        deskripsi:
          "Dari bubur sumsum lembut dalam kendil hingga dawet segar dalam mangkok dan kemasan, setiap sajian kami menghubungkan kamu dengan kehangatan dan kekayaan rasa warisan nenek moyang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726322453/rombong_belakang_ltpwec.jpg",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Bubur Sumsum dalam Kendil",
            deskripsi:
              "Bubur sumsum yang telah matang dan disimpan dalam kendil ini memberikan rasa yang autentik dan tradisional",
            price: "Rp5.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726322440/sumsum_psfxry.jpg",
          },
          {
            name: "Es Dawet dalam Mangkok",
            deskripsi:
              "Dawet hijau segar yang tersaji cantik dalam mangkok, dilengkapi dengan gula aren, santan, dan es batu. Kenikmatan tradisional yang menyegarkan setiap tegukan, dengan cendol kenyal, mutiara, dan tape ketan hijau yang berpadu dalam harmoni sempurna.",
            price: "Rp5.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726322428/dawet_wadah_mankok_xlznt8.jpg",
          },
          {
            name: "Es Dawet dalam Gelas Plastik",
            deskripsi:
              "Praktis dan menyegarkan! Dawet hijau dengan sentuhan bubur sumsum dan mutiara dalam gelas plastik siap minum, cocok untuk dinikmati kapan pun",
            price: "Rp5.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726322434/dawet_wadah_gelas_hr4ogp.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246.80329366708872!2d114.37574821163801!3d-8.21756487206192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1726323433275!5m2!1sid!2sid",
      footer: {
        noHp: "0883135951943",
        alamat:
          "JL. IKAN SADAR GG.DEPO, Desa/Kelurahan Karangrejo, Kec. Banyuwangi, Kab. Banyuwangi",
      },
    },
    "gadis-using": {
      title: "Gadis Using",
      icon: null,
      navbarTitle: "Gadis Using",
      ctaLink: null,
        keyword: [
          "Memori diperbarui",
          "Berikut beberapa keyword pencarian untuk website landing page UMKM Gadis Using dengan produk peyek kacang tanah, peyek teri, peyek kacang hijau, peyek geragho, keripik pisang, dan minuman temulawak di daerah Banyuwangi:",
          "",
          "Peyek Khas Banyuwangi Gadis Using",
          "Peyek Kacang Tanah Renyah Gadis Using",
          "Peyek Teri Lezat Gadis Using Banyuwangi",
          "Peyek Geragho Khas Gadis Using",
          "Keripik Pisang Asli Banyuwangi Gadis Using",
          "Minuman Temulawak Sehat Gadis Using Banyuwangi",
          "Peyek Tradisional Banyuwangi Gadis Using",
          "Camilan Renyah Peyek dan Keripik Pisang Gadis Using",
          "Minuman Herbal Temulawak Gadis Using Banyuwangi",
          "Oleh-Oleh Khas Banyuwangi Peyek dan Temulawak Gadis Using",
        ],
      
      color: {
        primary: "bg-[#BF1B28]",
        secondary: "bg-[#F2C230]",
        backgroundColor: "bg-[#fbf2f3]",
        hoverColor: "hover:bg-[#a4242e]",
        textColor: "text-[#010010]",
        btnTextColor: "text-[#ffffff]",
        accentColor: "text-[#ee5663]",
      },

      hero: {
        tagLine:
          "Rasakan Sensasi Kriuk Peyek dan Kesegaran Temulawak dari Gadis Using",
        deskripsi:
          "Di Gadis Using, nikmati renyahnya peyek dan kesegaran minuman temulawak khas Banyuwangi, semuanya dibuat dengan bahan berkualitas dan cita rasa tradisional",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727442928/gadis_using_bu_ukir_logo_ulhska.png",
      },
      about: {
        title: "Tentang",
        txt: "Kualitas dan Rasa Otentik dari Banyuwangi",
        deskripsi:
          "Di Gadis Using, kami berkomitmen untuk menjaga kualitas dan rasa otentik dalam setiap produk kami. Menggunakan bahan-bahan pilihan dan resep tradisional yang diwariskan turun-temurun, kami menghadirkan camilan dan minuman yang mencerminkan kekayaan cita rasa khas Banyuwangi. Dari peyek yang renyah hingga minuman temulawak yang menyegarkan, setiap produk dibuat dengan dedikasi untuk memberikan pengalaman kuliner yang tak terlupakan",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727442928/gadis_using_bu_ukir_logo_ulhska.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Peyek Kacang Tanah",
            deskripsi:
              "Peyek kacang tanah dari Gadis Using dibuat dari adonan tepung beras yang gurih, dengan kacang tanah yang renyah di setiap gigitan. Camilan tradisional ini cocok dinikmati sebagai teman makan atau camilan sehari-hari",
            price: "Rp10.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727442927/kacang_tanah_fxrcpd.jpg",
          },
          {
            name: "Peyek Teri",
            deskripsi:
              "Peyek teri kami menawarkan perpaduan sempurna antara renyahnya adonan peyek dan gurihnya ikan teri. Setiap lembar peyek memberikan cita rasa tradisional yang kaya dan khas Banyuwangi",
            price: "Rp10.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727442928/peyek_teri_cygre6.jpg",
          },
          {
            name: "Temulawak",
            deskripsi:
              "Minuman temulawak khas Gadis Using dikenal segar dan menyehatkan, dibuat dari bahan-bahan alami yang dipercaya mampu meningkatkan daya tahan tubuh. Rasanya yang unik dan khas menjadikannya pilihan minuman herbal yang nikmat kapan saja",
            price: "Rp5.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727442927/temulawak_bfrq5r.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.079799725823!2d114.29574919039001!3d-8.200743941574675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14f94384eaa69%3A0xf0714f9e99213ee5!2sDusun%20Krajan%2C%20Kemiren%2C%20Kec.%20Glagah%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727505017296!5m2!1sid!2sid",
      footer: {
        noHp: null,
        alamat:
          "Dusun Krajan, Desa/Kelurahan Kemiren, Kec. Glagah, Kab. Banyuwangi",
      },
    },
    "kedai88": {
      title: "Kedai88",
      icon: null,
      navbarTitle: "Kedai88",
      ctaLink: "https://wa.me/6282143978758",
        keyword: [
          "Es Lumut Segar Kedai88",
          "Donat Messes Coklat Kedai88",
          "Minuman Segar Es Lumut Banyuwangi",
          "Jual Donat Messes Coklat Enak Kedai88",
          "Kedai88 Es Lumut dan Donat Coklat",
          "Es Lumut Segar dan Donat Coklat Kedai88",
          "Es Lumut Kekinian dari Kedai88",
          "Camilan Donat Messes Coklat Kedai88",
          "Es Lumut Manis dan Segar Kedai88",
          "Pesan Es Lumut dan Donat Messes Coklat Kedai88",
          "Kedai88 Donat Coklat dan Minuman Segar",
          "Camilan Lezat Donat Coklat dan Es Lumut Kedai88",
          "Donat Messes Coklat Lembut Kedai88",
          "Es Lumut Viral Kedai88",
          "Minuman dan Donat Segar di Kedai88",
        ],
        color: {
          primary: "bg-[#5F7340]",
          secondary: "bg-[#ACBF8F]",
          backgroundColor: "bg-[#f9faf7]",
          hoverColor: "hover:bg-[#516335]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#734E39]",
        },

      hero: {
        tagLine: "Segarnya Es Lumut, Lezatnya Donat Coklat di Kedai88",
        deskripsi:
          "Kedai88 menghadirkan perpaduan sempurna antara kesegaran es lumut yang menyegarkan dan donat coklat yang manis serta lembut",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726823210/logo_ccjz1g.png",
      },
      about: {
        title: "Tentang",
        txt: "Kreasi Rasa, Kesegaran yang Tak Terlupakan",
        deskripsi:
          "Di Kedai88, kami berkomitmen untuk menyajikan kreasi rasa yang unik dan menyegarkan. Dari es lumut yang memanjakan dahaga hingga donat lembut dengan taburan coklat, setiap produk kami dibuat dengan bahan berkualitas",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726823210/logo_ccjz1g.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Es Lumut",
            deskripsi:
              "Minuman segar dengan tampilan unik, Es Lumut memadukan rasa manis dan kesegaran yang pas. Cocok untuk dinikmati di hari panas",
            price: "Rp7.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726823194/es_lumut_otz3ed.jpg",
          },
          {
            name: "Adonan Donat",
            deskripsi:
              "Adonan donat yang telah dibentuk bulat-bulat ini lembut dan kenyal, siap untuk digoreng hingga sempurna",
            price: "Rp3.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726823882/adonan_donat_tgoifw.jpg",
          },
          {
            name: "Donat Messes Coklat",
            deskripsi:
              "Donat lembut yang dilapisi dengan taburan messes coklat melimpah, memberikan perpaduan sempurna antara tekstur empuk dan rasa manis",
            price: "Rp3.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726823196/donat_woxrix.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.27326791584!2d114.37234967381227!3d-8.175201581940389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd145aea3b8aedf%3A0x1741c73f21761fb6!2sGg.%20Flamboyan%2C%20Klatak%2C%20Kec.%20Kalipuro%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur%2068421!5e0!3m2!1sid!2sid!4v1726825042254!5m2!1sid!2sid",
      footer: {
        noHp: "0882143978758",
        alamat:
          "JL. DENPASAR LINGK.KLATAKAN, Desa/Kelurahan Klatak, Kec. Kalipuro, Kab. Banyuwangi",
      },
    },
    "kue-basah-bu-slamet": {
      title: "Kue Basah Bu Slamet",
      icon: null,
      navbarTitle: "Kue Basah Bu Slamet",
      ctaLink: "https://wa.me/6285222510545",
        keyword: [
          "Kue Putri Mandi Bu Slamet",
          "Wingko Buatan Bu Slamet",
          "Kue Lapis Tradisional Bu Slamet",
          "Kue Basah Bu Slamet",
          "Jual Kue Putri Mandi Banyuwangi",
          "Wingko Asli Banyuwangi",
          "Kue Lapis Buatan Rumah Bu Slamet",
          "Pusat Kue Basah Bu Slamet",
          "Wingko dan Kue Putri Mandi Tradisional",
          "Kue Lapis Enak Bu Slamet",
          "Kue Basah Tradisional Bu Slamet",
          "Jual Wingko, Putri Mandi, Lapis Banyuwangi",
          "Kue Tradisional Bu Slamet Banyuwangi",
          "Pesan Kue Basah Bu Slamet Online",
          "Kue Putri Mandi, Wingko, dan Lapis Bu Slamet",
        ],
        color: {
          primary: "bg-[#078C41]",
          secondary: "bg-[#BDF26D]",
          backgroundColor: "bg-[#edfef5]",
          hoverColor: "hover:bg-[#056b31]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#8348f1]",
        },

      hero: {
        tagLine: "Manisnya Tradisi, Lezatnya Kue Basah dari Dapur Bu Slamet",
        deskripsi:
          "Setiap gigitan menyuguhkan rasa otentik yang tak terlupakan, sempurna untuk menemani momen istimewa atau camilan sehari-hari",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726484871/logo_zzoibi.png",
      },
      about: {
        title: "Tentang",
        txt: "Dari Dapur Kecil, untuk Cita Rasa yang Besar",
        deskripsi:
          "Bu Slamet memulai usaha ini dengan kesederhanaan, namun dengan tekad besar untuk menghadirkan cita rasa terbaik. Setiap kue yang dibuat mencerminkan dedikasi terhadap kualitas dan keaslian rasa tradisional. Dari dapur kecil kami, kami menyajikan kue-kue yang penuh kelezatan, siap memanjakan lidah Anda dengan kenikmatan yang tak terlupakan",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726484871/logo_zzoibi.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Putri Mandi",
            deskripsi:
              "Kue berbentuk segitiga dengan kulit berwarna putih lembut dan isian ungu yang manis legit",
            price: "Rp1.500",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726484881/putri_mandi_m1tdgg.jpg",
          },
          {
            name: "Wingko",
            deskripsi:
              "Wingko yang dipanggang dalam oven, menghasilkan tekstur luar yang renyah namun tetap lembut di dalam",
            price: "Rp1.500",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726484880/wingko2_dmgeyn.jpg",
          },
          {
            name: "Lapis Hijau",
            deskripsi:
              "Kue lapis tradisional dengan lapisan hijau yang lembut dan kenyal, terbuat dari tepung beras dan santan dengan aroma pandan yang harum",
            price: "Rp1.500",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726484886/lapis_jxlgdq.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d293.503610740035!2d114.37027669814589!3d-8.212997475146565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1452fdf4b9c7d%3A0x2ca999baa6cffa5d!2sJl.%20Serayu%2C%20Kec.%20Banyuwangi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur%2068415!5e0!3m2!1sid!2sid!4v1726486542137!5m2!1sid!2sid",
      footer: {
        noHp: "0885222510545",
        alamat:
          "JL. SERAYU, Desa/Kelurahan Panderejo, Kec. Banyuwangi, Kab. Banyuwang",
      },
    },
    "kue-pia-luwih": {
      title: "Kue Pia Luwih",
      icon: null,
      navbarTitle: "Kue Pia Luwih",
      ctaLink: "https://wa.me/6285607154612",
        keyword: [
          "Kue Pia Luwih – Pia Tape & Kacang Hijau Terlezat",
          "Jual Kue Pia Tape dan Kacang Hijau – Kue Pia Luwih",
          "Pia Tape dan Kacang Hijau – Produk Spesial Kue Pia Luwih",
          "Kue Pia Luwih – Pia Tape & Kacang Hijau Asli Banyuwangi",
          "Pia Kacang Hijau & Tape – Kue Pia Luwih UMKM Lokal",
          "UMKM Pia Tradisional – Kue Pia Luwih",
          "Kue Pia Tape dan Kacang Hijau – Pia Khas dari Kue Pia Luwih",
          "Pia Luwih – Kue Pia Tradisional Tape & Kacang Hijau",
          "Kue Pia Banyuwangi – Kue Pia Tape & Kacang Hijau Khas Luwih",
          "Kue Pia Luwih – UMKM Pia Tape dan Kacang Hijau",
        ],
        color: {
          primary: "bg-[#c92525]",
          secondary: "bg-[#e68181]",
          backgroundColor: "bg-[#f9f1f1]",
          hoverColor: "hover:bg-[#a31414]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#eb5c5c]",
        },

      hero: {
        tagLine: "Kelezatan Kue Pia Tape & Kacang Hijau dalam Satu Gigitan",
        deskripsi:
          "Kue pia kami cocok dinikmati kapan saja, baik sebagai teman minum teh di sore hari, camilan saat bersantai, atau oleh-oleh khas yang memikat hati",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726225064/pelaku_umkm_ln8ptj.jpg",
      },
      about: {
        title: "Tentang",
        txt: "Cita Rasa Otentik, Kualitas Terjamin",
        deskripsi:
          "Di Kue Pia Luwih, kami berkomitmen untuk menjaga keaslian rasa tradisional dalam setiap produk yang kami buat. Dengan bahan-bahan pilihan dan proses pembuatan yang teliti, kami memastikan setiap kue pia memiliki cita rasa otentik dan kualitas terbaik. Nikmati kelezatan yang selalu konsisten dan tak pernah mengecewakan",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726223012/logo_lyvvi9.jpg",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Kue Pia Tape",
            deskripsi:
              "Dibuat dari tape pilihan, Kue Pia Tape menawarkan sensasi rasa unik yang bikin ketagihan di setiap gigitan",
            price: "Rp1.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726223025/pia_tape_fuhyb8.jpg",
          },
          {
            name: "Kue Pia Kacang Hijau",
            deskripsi:
              "Kue Pia Kacang Hijau menghadirkan sensasi kulit pia yang renyah dengan isian kacang hijau yang lembut dan manis",
            price: "Rp1.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726223022/pia_kacang_hijau_qvb53b.jpg",
          },
          {
            name: "Kue Pia Tape dan Kacang Hijau",
            deskripsi:
              "Kue Pia Tape dan Kacang Hijau adalah kombinasi istimewa dari kulit pia yang renyah dengan isian tape manis dan kacang hijau yang lembut",
            price: "Rp1.000",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726223023/pia_kacang_hijau_dan_tape_xrggg6.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d246.80473409581415!2d114.37339754967788!3d-8.21524901638229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1726224311338!5m2!1sid!2sid",
      footer: {
        noHp: "0885607154612",
        alamat:
          "JL. KH. ASYARI NO.07, Desa/Kelurahan Tukangkayu, Kec. Banyuwangi, Kab. Banyuwangi",
      },
    },
    "pukis-barokah": {
      title: "Pukis Barokah",
      icon: null,
      navbarTitle: "Pukis Barokah",
      ctaLink: null,
        keyword: [
          "Pukis Barokah Tradisional",
          "Pukis Barokah Kue Lezat",
          "Pukis Empuk Pukis Barokah",
          "Kue Pukis Barokah Asli",
          "Pukis Barokah Enak dan Lembut",
          "Aneka Pukis di Pukis Barokah",
          "Pukis Barokah Khas Tradisi Lokal",
          "Resep Pukis Lembut Pukis Barokah",
          "Pukis Original dan Topping di Pukis Barokah",
          "Kue Pukis Pilihan Terbaik Pukis Barokah",
        ],
        color: {
          primary: "bg-[#733E1F]",
          secondary: "bg-[#F2B66D]",
          backgroundColor: "bg-[#fcfbfa]",
          hoverColor: "hover:bg-[#592f17]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#733E1F]",
        },

      hero: {
        tagLine: "Setiap Pukis, Sebuah Kelezatan yang Tak Terlupakan",
        deskripsi:
          "Di Pukis Barokah, kami menghadirkan kue pukis yang lembut dan gurih dengan cita rasa autentik yang selalu menggoda selera",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727442444/logo_pukis_barokah_bu_ernina_rhiz3v.png",
      },
      about: {
        title: "Tentang",
        txt: "Komitmen pada Kualitas, Kelezatan di Setiap Pukis",
        deskripsi:
          "Di Pukis Barokah, kami selalu mengutamakan kualitas dalam setiap pukis yang kami buat. Dengan bahan-bahan terbaik dan proses yang hati-hati, kami menghadirkan pukis yang empuk dan lezat di setiap gigitan. Kelezatan yang bisa dinikmati kapan saja, selalu dengan rasa yang konsisten dan memuaskan",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727442444/logo_pukis_barokah_bu_ernina_rhiz3v.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Pukis",
            deskripsi:
              "Tersedia dalam topping coklat, menawarkan sensasi kelezatan pukis yang berbeda namun tetap autentik",
            price: "Rp1.500",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727442446/pukis_barokah_zubt8n.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7895.770713032597!2d114.27119902317301!3d-8.314190177473915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd156d14badfd0f%3A0x7c6e5e9779733beb!2sKabelan%20Kidul%2C%20Lemahbangdewo%2C%20Kec.%20Rogojampi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727443110306!5m2!1sid!2sid",
      footer: {
        noHp: null,
        alamat: "DUSUN KEBALEN KIDUL, Desa/Kelurahan Lemahbangdewo, Kec. Rogojampi",
      },
    },
    "seroja": {
      title: "Seroja",
      icon: null,
      navbarTitle: "Seroja",
      ctaLink: "https://wa.me/6283139758427",
        keyword: [
          "Seroja – Kue Bolu Mini Kering Lezat dan Renyah",
          "Kue Bolu Mini Kering Seroja – Camilan Sempurna untuk Segala Suasana",
          "Bolu Mini Kering Seroja – Kue Tradisional dengan Rasa Spesial",
          "Jual Kue Bolu Mini Kering Seroja – Camilan Ringan yang Renyah",
          "Kue Bolu Mini Kering Seroja – Produk UMKM Berkualitas",
          "Kue Bolu Mini Kering Renyah – Seroja Bakery",
          "Seroja – Bolu Mini Kering Asli dan Lezat",
          "UMKM Seroja – Kue Bolu Mini Kering Tradisional",
          "Bolu Mini Kering Khas Seroja – Camilan Enak Setiap Saat",
          "Kue Bolu Mini Kering dari Seroja – Kelezatan Kue Tradisional",
          "Seroja – Kue Bolu Mini Kering Lezat dan Renyah",
          "Kue Kering Bolu Mini – Produk Unggulan Seroja",
          "Bolu Mini Kering Seroja – Camilan Manis dan Gurih",
          "Kue Bolu Mini Kering – Camilan Praktis dari Seroja",
          "Seroja – Kue Bolu Mini Kering Pilihan Terbaik",
          "UMKM Seroja – Produksi Kue Bolu Mini Kering Berkualitas",
          "Bolu Mini Kering Seroja – Oleh-Oleh Khas dengan Cita Rasa Unik",
          "Kue Bolu Mini Kering Asli – Seroja UMKM Lokal",
          "Seroja – Kue Kering Bolu Mini untuk Segala Kesempatan",
          "Kue Bolu Mini Kering – Kelezatan dalam Ukuran Mini dari Seroja",
        ],
        color: {
          primary: "bg-[#734636]",
          secondary: "bg-[#F2B872]",
          backgroundColor: "bg-[#fdf9f7]",
          hoverColor: "hover:bg-[#402617]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#734636]",
        },

      hero: {
        tagLine: "Kecil dalam Ukuran, Besar dalam Rasa",
        deskripsi:
          "Kami menciptakan bolu mini kering yang meskipun berukuran kecil, memberikan kelezatan yang luar biasa di setiap gigitan",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726470041/seroja_bu_hariyani_gnk27d.png",
      },
      about: {
        title: "Tentang",
        txt: "Renyah dan Lezat, Kue Bolu Mini Kering dari Seroja",
        deskripsi:
          "Dibuat dari bahan-bahan berkualitas, camilan ini cocok untuk dinikmati kapan saja, baik sebagai teman minum teh, camilan keluarga, maupun oleh-oleh khas",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726470041/seroja_bu_hariyani_gnk27d.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Bolu Mini Proses Cetak",
            deskripsi:
              "Bolu mini ini setelah adonan jadi, lalu dimasukkan kedalam cetakan kertas, setelah itu dihias di atasnya menggunakan pewarna coklat, menciptakan tampilan yang menarik dan unik",
            price: "Rp70.000/Kg",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726470062/cetakan_uz58uy.jpg",
          },
          {
            name: "Bolu Mini Proses Oven",
            deskripsi:
              "Setelah dicetak, bolu mini dipanggang dengan sempurna menggunakan oven. Proses ini memastikan tekstur renyah di luar dan lembut di dalam, dengan aroma khas bolu yang menggugah selera.",
            price: "Rp70.000/Kg",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726470068/proses_dioven_i9xu5r.jpg",
          },
          {
            name: "Bolu Mini Kering ",
            deskripsi:
              "Setelah proses oven selesai, bolu mini kering dikemas rapi dalam plastik yang higienis. Kemasan ini menjaga kelezatan dan kerenyahan bolu tetap terjaga, sekaligus praktis untuk dijadikan oleh-oleh atau camilan harian.",
            price: "Rp70.000/Kg",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1726470054/hasil_y0z4cu.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8961437831376!2d114.36645436853661!3d-8.213198764304654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1452fc9c44b11%3A0x5b4d98783f684327!2sJl.%20Serayu%20No.2%2C%20Panderejo%2C%20Kec.%20Banyuwangi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur%2068415!5e0!3m2!1sid!2sid!4v1726469471067!5m2!1sid!2sid",
      footer: {
        noHp: "0883139758427",
        alamat:
          "JL. SERAYU NO.02, Desa/Kelurahan Panderejo, Kec. Banyuwangi, Kab. Banyuwangi",
      },
    },
    "yuli-cake": {
      title: "Yuli Cake",
      icon: null,
      navbarTitle: "Yuli Cake",
      ctaLink: "https://wa.me/6282233142060",
        keyword: [
          "Pie Selai Nanas Yuli Cake",
          "Pie Selai Coklat Yuli Cake",
          "Pie Selai Strawberry Yuli Cake",
          "Donat Messes Coklat Yuli Cake",
          "Pie Nanas, Coklat, dan Strawberry di Yuli Cake",
          "Jual Pie Nanas Yuli Cake",
          "Kue Pie Selai Coklat Enak Yuli Cake",
          "Pie Buah Strawberry dan Nanas Yuli Cake",
          "Donat Coklat Messes Lembut Yuli Cake",
          "Pesan Pie dan Donat Messes Coklat Yuli Cake",
          "Pie Coklat dan Nanas Yuli Cake, Lezat dan Lembut",
          "Pie Selai Strawberry Segar Yuli Cake",
          "Kue Pie Isi Nanas dan Coklat Yuli Cake",
          "Donat Messes Coklat Yuli Cake, Lembut dan Manis",
          "Pie Nanas, Coklat, Strawberry dan Donat Coklat di Yuli Cake",
        ],
        color: {
          primary: "bg-[#9F7E6A]",
          secondary: "bg-[#F2CB57]",
          backgroundColor: "bg-[#fbf9f8]",
          hoverColor: "hover:bg-[#826756]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#9F7E6A]",
        },

      hero: {
        tagLine: "Yuli Cake: Perpaduan Manis Pie dan Donat yang Menggoda Selera",
        deskripsi:
          "Setiap gigitan menghadirkan rasa yang lezat dan memanjakan lidah, sempurna untuk camilan atau hidangan istimewa",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727003262/pelaku_umkm_rhrbne.jpg",
      },
      about: {
        title: "Tentang",
        txt: "Dedikasi untuk Setiap Rasa Manis dan Kualitas Terbaik",
        deskripsi:
          "Di Yuli Cake, setiap produk dibuat dengan sepenuh hati untuk menghadirkan rasa manis yang sempurna. Kami selalu mengutamakan kualitas bahan dan detail dalam proses pembuatan, sehingga setiap kue pie dan donat kami memberikan kenikmatan yang tak terlupakan. Komitmen kami adalah memastikan Anda mendapatkan kue terbaik untuk setiap momen spesial",
        img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727003258/logo_tl42cb.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Pie Selai Nanas",
            deskripsi:
              "Pie dengan isian selai nanas segar yang manis dan sedikit asam, dipadukan dengan kulit pie renyah yang lembut. Setiap potongan memberikan rasa yang seimbang, sempurna untuk menemani waktu santai Anda",
            price: "Rp2.500/pcs",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727003260/pie_nanas_b57za5.jpg",
          },
          {
            name: "Pie Selai Coklat",
            deskripsi:
              "Pie dengan isian coklat yang lumer dan kaya rasa, terbungkus dalam kulit pie yang garing. Camilan yang sempurna untuk pecinta coklat, menghadirkan perpaduan tekstur dan rasa yang memuaskan",
            price: "Rp2.500/pcs",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727003262/pie_coklat_kujnge.jpg",
          },
          {
            name: "Donat Messes Coklat",
            deskripsi:
              "Donat lembut dengan taburan messes coklat yang melimpah. Setiap gigitan memberikan sensasi manis dan empuk yang tak terlupakan, cocok untuk dinikmati kapan saja",
            price: "Rp2.000/pcs",
            img: "https://res.cloudinary.com/dnsjvfixm/image/upload/v1727003260/donat_w5se23.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8749309309987!2d114.37071997381294!3d-8.215330882437053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1452e824d41ad%3A0x37724ffaaafb7e05!2sGg.%20Jaya%2C%20Kec.%20Banyuwangi%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727003702882!5m2!1sid!2sid",
      footer: {
        noHp: "0882233142060",
        alamat:
          "JL. KH. ASYARI NO.07, Desa/Kelurahan Tukangkayu, Kec. Banyuwangi, Kab. Banyuwangi",
      },
    },
    "dapur-mama-lutfi": {
      title: "Dapur Mama Lutfi",
      icon: null,
      navbarTitle: "Dapur Mama Lutfi",
      ctaLink: "https://wa.me/082131019843",
        keyword: [
          "Nasi Geprek Enak",
          "Nasi Geprek Terbaik",
          "Nasi Geprek Pedas",
          "Nasi Geprek Menu",
          "Nasi Geprek Delivery",
          "Nasi Geprek Harga Murah",
          "Nasi Geprek Khas [Nama Kota/Daerah]",
          "Nasi Geprek Promo",
          "Nasi Geprek Porsi Besar",
          "Nasi Geprek Terdekat",
        ],
        color: {
          primary: "bg-[#BF1111]",
          secondary: "bg-[#D98282]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#D95252]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#D95252]",
        },

      hero: {
        tagLine: "Nasi Geprek Pedas yang Bikin Ketagihan!",
        deskripsi:
          "Kami menyajikan hidangan nasi geprek dengan cita rasa pedas yang menggugah selera. Setiap suapan menawarkan kombinasi sempurna antara nasi pulen, ayam goreng crispy, dan sambal pedas khas yang akan memanjakan lidah Anda. Cocok untuk semua pencinta makanan pedas, menu kami diolah dengan bahan berkualitas dan resep rahasia yang membuat setiap hidangan terasa istimewa.",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727537180/logo_geprek_mc7z3m.png",
      },
      about: {
        title: "Tentang",
        txt: "Menjaga Kualitas, Menyajikan Kebahagiaan!",
        deskripsi:
          "Dengan komitmen untuk menjaga kualitas bahan baku terbaik, kami menyajikan Nasi Geprek yang tidak hanya menggugah selera, tetapi juga memberikan kebahagiaan di setiap suapan. Dari proses pengolahan yang teliti hingga cita rasa yang autentik. Bergabunglah dengan kami dan rasakan kebahagiaan yang kami sajikan dalam setiap piring!",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727537180/logo_geprek_mc7z3m.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Nasi Geprek",
            deskripsi:
              'Nasi Geprek adalah hidangan khas Indonesia yang menggabungkan nasi pulen dengan ayam goreng crispy yang disajikan dengan sambal pedas. Proses penyajian uniknya melibatkan "menggeprek" atau menghancurkan ayam di atas nasi, sehingga semua rasa bercampur sempurna. Nikmati sensasi pedas yang menggugah selera dan kelezatan yang membuat Anda ketagihan',
            price: "Rp10.000",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727537177/nasi_geprek_neryxt.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7896.283448166367!2d114.24093957877774!3d-8.288691227107885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15167e899231b%3A0x5a901a5446a22185!2sWijenan%20Lor%2C%20Singolatren%2C%20Kec.%20Singojuruh%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727594081665!5m2!1sid!2sid",
      footer: {
        noHp: "082131019843",
        alamat:
          "Dusun Wijenan Lor RT/RW 001/002",
      },
    },
    "es-degan-edi": {
      title: "Es Degan Edi",
      icon: null,
      navbarTitle: "Es Degan Edi",
      ctaLink: "https://wa.me/082131019843",
        keyword: [
          "Es Degan Segar",
          "Minuman Es Degan",
          "Es Kelapa Muda",
          "Es Degan untuk Acara",
          "Es Degan Alami",
          "Resep Es Degan",
          "Es Degan Murah",
          "Es Degan Terbaik",
          "Es Degan Klatak",
          "Es Degan Promosi",
          "Beli Es Degan Online",
          "Es Degan untuk Berbagai Acara",
          "Es Degan dan Manfaatnya",
          "Tempat Jual Es Degan",
          "Es Degan Terdekat",
        ],
        color: {
          primary: "bg-[#2D7337]",
          secondary: "bg-[#73A626]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#97BF3F]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#2D7337]",
        },

      hero: {
        tagLine: "Segarkan Hari Anda dengan Es Kelapa Muda!",
        deskripsi:
          "Nikmati kesegaran yang tiada tara dengan Es Kelapa Muda kami! Terbuat dari kelapa segar pilihan, setiap gelas menawarkan kombinasi rasa manis alami dan tekstur lembut yang memanjakan lidah. Ideal untuk menghilangkan dahaga di hari panas atau sebagai teman santai Anda, Es Kelapa Muda kami siap memuaskan setiap momen.",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727535346/logo_es_degan_2_yqse2d.png",
      },
      about: {
        title: "Tentang",
        txt: "Menyegarkan Hari Anda, Satu Kelapa Muda di Setiap Gelas",
        deskripsi:
          "Dengan dedikasi pada kesegaran dan kualitas, kami menghadirkan Es Kelapa Muda terbaik untuk menyegarkan hari Anda. Setiap gelas dibuat dari kelapa muda pilihan yang dipetik langsung dari sumbernya, memastikan rasa alami dan kenikmatan di setiap tegukan.Segarkan hari Anda, satu kelapa muda dalam setiap gelas!",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727535346/logo_es_degan_2_yqse2d.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Es Kelapa Muda",
            deskripsi:
              "Es Kelapa Muda adalah minuman segar yang terbuat dari kelapa muda pilihan, disajikan dengan es batu untuk memberikan sensasi dingin yang menyegarkan.Sempurna untuk menghilangkan dahaga di hari yang panas atau sebagai pelengkap momen spesial. Rasakan kesegaran alami yang langsung dari alam dengan setiap gelasnya!",
            price: "Rp5.000",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727592343/es_kelapa_edi_axycwg.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15789.766103768692!2d114.18060038276408!3d-8.358152036919444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15500a282fb49%3A0x3782a217d1e05a2f!2sTemurejo%2C%20Kembiritan%2C%20Kec.%20Genteng%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727591547927!5m2!1sid!2sid",
      footer: {
        noHp: "083837721453",
        alamat: "Dusun Temurejo Desa kembiritan Kecamatan Genteng",
      },
    },
    "warung-panti-pandan": {
      title: "Warung Panti Pandan",
      icon: null,
      navbarTitle: "Warung Panti Pandan",
      ctaLink: "https://wa.me/0812342420463",
        keyword: [
          "Es Degan Segar",
          "Minuman Es Degan",
          "Es Kelapa Muda",
          "Es Degan untuk Acara",
          "Es Degan Alami",
          "Resep Es Degan",
          "Es Degan Murah",
          "Es Degan Terbaik",
          "Es Degan Klatak",
          "Es Degan Promosi",
          "Beli Es Degan Online",
          "Es Degan untuk Berbagai Acara",
          "Es Degan dan Manfaatnya",
          "Tempat Jual Es Degan",
          "Es Degan Terdekat",
        ],
        color: {
          primary: "bg-[#84BF2A]",
          secondary: "bg-[#D9A05B]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#B2D977]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#592B03]",
        },

      hero: {
        tagLine: "Es Kelapa Muda: Cita Rasa Segar yang Tak Terlupakan!",
        deskripsi:
          "Es Kelapa Muda kami menghadirkan cita rasa segar yang tak terlupakan. Dengan kelapa muda pilihan yang dipetik langsung dari alam, setiap tegukan memberikan sensasi kesegaran alami dan manis yang menyatu sempurna.Rasakan kesegarannya dan biarkan kenikmatannya memanjakan lidah Anda!",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727535297/logo_es_kelapa_1_q4qfkn.png",
      },
      about: {
        title: "Tentang",
        txt: "Menghadirkan Kelezatan Kelapa Muda, Langsung dari Sumbernya",
        deskripsi:
          "Setiap kelapa dipilih dengan cermat untuk memastikan kesegaran dan kualitas terbaik, sehingga Anda dapat menikmati cita rasa alami yang otentik. Dengan perpaduan air kelapa yang manis dan daging buah yang lembut, Es Kelapa Muda kami menawarkan kesegaran yang menyejukkan dan penuh kenikmatan. Rasakan langsung kebaikan alam di setiap gelas!",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727535297/logo_es_kelapa_1_q4qfkn.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Es Kelapa Muda",
            deskripsi:
              "Es Kelapa Muda adalah minuman segar alami yang terbuat dari kelapa muda pilihan, dikenal dengan daging buahnya yang lembut dan air kelapa yang manis alami. Setiap gelas menawarkan kesegaran tropis yang menyegarkan, sempurna untuk menghilangkan dahaga dan memberikan energi di hari yang panas.",
            price: "Rp5.000",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727535305/es_kelapa_1_axhzqb.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8248.310051641669!2d114.19349999436847!3d-8.373287624019735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15598a441aa21%3A0xa3d1dc988c41bd65!2sPandan%2C%20Kembiritan%2C%20Kec.%20Genteng%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727592730636!5m2!1sid!2sid",
      footer: {
        noHp: "0812342420463",
        alamat: "Dusun Pandan RT 003 RW 004 Desa Kembiritan Kecamatan Genteng",
      },
    },
    "gorengan-aan": {
      title: "Gorengan Aan",
      icon: null,
      navbarTitle: "Gorengan Aan",
      ctaLink: "https://wa.me/085230328383",
        keyword: [
          "Gorengan - Nama Usaha dan produk",
          "Gorengan Terbaik - Kualitas produk",
          "Gorengan Renyah dan Gurih - Deskripsi rasa",
          "UMKM Gorengan Lokal - Branding sebagai UMKM lokal",
          "Jual Gorengan Enak - Fokus pada cita rasa",
          "Gorengan Tradisional Indonesia - Makanan khas lokal",
          "Camilan Gorengan - Kata kunci umum untuk produk",
          "Snack Gorengan Favorit - Pemosisian sebagai pilihan favorit",
          "Pesan Gorengan Online - Layanan online",
          "Gorengan untuk Acara - Target pasar untuk event",
        ],
        color: {
          primary: "bg-[#8C0B0B]",
          secondary: "bg-[#F28B50]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#F28B50]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#BF4949]",
        },

      hero: {
        tagLine: "Nikmati Kriuknya, Rasakan Lezatnya",
        deskripsi:
          "Temukan sensasi gorengan yang renyah di luar dan lembut di dalam, dibuat dengan bahan-bahan berkualitas dan resep terbaik. Setiap gigitan memberikan perpaduan sempurna antara tekstur kriuk yang memuaskan dan rasa gurih yang menggoda. Cocok untuk dinikmati kapan saja, baik untuk camilan sehari-hari maupun acara spesial. Pesan sekarang dan rasakan sendiri kelezatannya!",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727573671/logo_gorengan_k99zwo.png",
      },
      about: {
        title: "Tentang",
        txt: "Kriuknya Menggoda, Rasa yang Memikat",
        deskripsi:
          "Dengan resep tradisional dan bahan-bahan berkualitas, kami menyajikan gorengan yang tidak hanya renyah di luar, tetapi juga kaya rasa di dalam. Setiap gigitan membawa Anda pada perjalanan rasa yang menggugah selera. Kami berkomitmen untuk menghadirkan camilan yang menggoda dan memikat, menjadikan setiap momen istimewa lebih bermakna. Bergabunglah dengan kami untuk menikmati kelezatan yang akan membuat Anda kembali lagi!",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727573671/logo_gorengan_k99zwo.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Bakwan Goreng",
            deskripsi:
              "Bakwan Goreng adalah camilan tradisional yang terbuat dari adonan sayuran segar, tepung, dan bumbu pilihan, kemudian digoreng hingga kecokelatan. Kriuknya yang renyah di luar dan lembut di dalam menjadikannya teman sempurna untuk bersantai atau sebagai lauk pendamping. Nikmati kelezatannya yang penuh rasa!",
            price: "Rp1.000/Biji",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727573675/bakwan_tlgchp.jpg",
          },
          {
            name: "Tahu Isi",
            deskripsi:
              "Tahu Isi adalah camilan lezat yang terdiri dari tahu berisi sayuran dan bumbu khas, digoreng hingga golden brown. Setiap gigitan memberikan kombinasi tekstur lembut dari tahu dan kerenyahan dari kulitnya. Cocok sebagai camilan atau hidangan pembuka yang memuaskan.",
            price: "Rp1.000/Biji",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727573682/tahu_isi_xs7sje.jpg",
          },
          {
            name: "Pisang Goreng",
            deskripsi:
              "Pisang Goreng adalah camilan manis yang terbuat dari pisang matang yang dibalut adonan tepung dan digoreng hingga kecokelatan. Dengan rasa manis alami dan tekstur renyah, pisang goreng ini menjadi favorit banyak orang. Sempurna untuk dinikmati sebagai camilan sore atau penutup yang menggugah selera!",
            price: "Rp1.000/Biji",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727573685/pisang_goreng_u0nnww.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10613.328348895595!2d114.1999779526879!3d-8.361488149954967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd155b0485a9859%3A0x960265770a27a4b4!2sRimpis%2C%20Sumbersari%2C%20Kec.%20Srono%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727593443124!5m2!1sid!2sid",
      footer: {
        noHp: "085230328383",
        alamat: "Dusun Rimpis Desa sumbersari Srono Rt 003 Rw 001",
      },
    },
    "ketan-rahemah": {
      title: "Ketan Rahemah",
      icon: null,
      navbarTitle: "Ketan Rahemah",
      ctaLink: "https://wa.me/082234960893",
        keyword: [
          "Ketan Lezat - Spesialis Ketan Manis & Gurih",
          "Usaha Ketan Lokal - Cita Rasa Tradisional",
          "Ketan Premium - Olahan Ketan Terbaik",
          "Varian Ketan Kekinian - Jajanan Favorit Semua Usia",
          "Kuliner Ketan Nusantara - Rasa Autentik & Berkualitas",
          "Inovasi Ketan Tradisional - Sajian Ketan Lezat dan Sehat",
          "Jajanan Ketan Terlaris - Pesan Ketan Online",
          "Usaha Ketan UMKM - Produk Halal dan Terpercaya",
          "Ketan Manis & Asin - Solusi Jajanan Keluarga",
          "Produk Ketan Lokal - UMKM Berkualitas",
        ],
        color: {
          primary: "bg-[#F28E13]",
          secondary: "bg-[#F2B263]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#F2B263]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#1D591B]",
        },

      hero: {
        tagLine: "Nikmati Ketan, Cita Rasa yang Menginspirasi",
        deskripsi:
          " Kami mengolah ketan dengan resep tradisional yang dipadukan dengan sentuhan modern, menciptakan varian lezat yang cocok untuk setiap kesempatan. Dari ketan manis yang menggoda hingga ketan gurih yang memuaskan, setiap produk kami dihasilkan dengan bahan berkualitas dan cinta. Bergabunglah dengan kami untuk menikmati kelezatan ketan yang tak hanya memuaskan selera",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727577256/logo_ketan_1_tb2haq.png",
      },
      about: {
        title: "Tentang",
        txt: "Menyajikan Kelezatan Ketan dengan Cinta dan Tradisi",
        deskripsi:
          "Kami menyajikan kelezatan ketan yang terbuat dari resep autentik dan bahan berkualitas. Setiap hidangan kami diolah dengan cinta, menggabungkan tradisi yang kaya dengan cita rasa modern. Nikmati setiap gigitan ketan kami yang menggoda, dan rasakan pengalaman kuliner yang mempererat hubungan dan menciptakan kenangan indah.",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727577256/logo_ketan_1_tb2haq.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Ketan",
            deskripsi:
              "Ketan adalah makanan tradisional yang terbuat dari beras ketan, dikenal dengan teksturnya yang kenyal dan rasa yang lezat. Disetiap hidangan ketan menawarkan pengalaman rasa yang unik dan memikat. Cocok untuk dinikmati sebagai camilan atau hidangan penutup, ketan adalah pilihan sempurna untuk menambah kehangatan dalam setiap momen spesial.",
            price: "Rp5.000/Porsi",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727524443/Ketan_bubuk_kedele_hf9sls.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7896.283448166367!2d114.24093957877774!3d-8.288691227107885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15167e899231b%3A0x5a901a5446a22185!2sWijenan%20Lor%2C%20Singolatren%2C%20Kec.%20Singojuruh%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727589123719!5m2!1sid!2sid",
      footer: {
        noHp: "082234960893",
        alamat: "Singolatren Dsn Wijenan Lor RT/RW 002/001",
      },
    },
    "warung-santai-bambu-asri": {
      title: "Warung Santai Bambu Asri",
      icon: null,
      navbarTitle: "Warung Santai Bambu Asri",
      ctaLink: "https://wa.me/085228521470",
        keyword: [
          "Nasi Campur Enak",
          "Nasi Campur Terdekat",
          "Nasi Campur Murah",
          "Kuliner Nasi Campur",
          "Warung Nasi Campur",
          "Nasi Campur Spesial",
          "Nasi Campur Tradisional",
          "Nasi Campur Khas Indonesia",
          "Nasi Campur Favorit",
          "Menu Nasi Campur Lezat",
          "Nasi Campur Halal",
          "Usaha Nasi Campur UMKM",
          "Warung Makan Nasi Campur",
          "Restoran Nasi Campur",
          "Nasi Campur Untuk Acara",
          "Pesan Antar Nasi Campur",
        ],
        color: {
          primary: "bg-[#8C2108]",
          secondary: "bg-[#A65F37]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#A65F37]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#345936]",
        },

      hero: {
        tagLine: "Nasi Campur Lezat, Harga Bersahabat!",
        deskripsi:
          "Kami menghadirkan Nasi Campur dengan cita rasa yang menggugah selera, paduan lauk-pauk pilihan yang lengkap dan lezat.Kami selalu menggunakan bahan-bahan segar dan berkualitas, sehingga setiap piring penuh dengan kehangatan dan rasa autentik. Sempurna untuk santap siang, makan malam, atau saat Anda butuh kelezatan yang cepat dan terjangkau.",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727523116/logo_nasi_campur_jwp1io.png",
      },
      about: {
        title: "Tentang",
        txt: "Dimasak dengan Teliti, Dihidangkan dengan Sepenuh Hati",
        deskripsi:
          "Kami percaya bahwa setiap hidangan adalah bentuk perhatian. Itulah sebabnya kami selalu memastikan setiap proses memasak dilakukan dengan teliti, menggunakan bahan-bahan berkualitas terbaik. Setiap piring Nasi Campur yang kami hidangkan dengan penuh kehangatan untuk memberikan pengalaman makan yang tak terlupakan.",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727523116/logo_nasi_campur_jwp1io.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Nasi Campur",
            deskripsi:
              "Nasi Campur adalah hidangan khas Indonesia yang terdiri dari nasi putih yang disajikan dengan berbagai lauk-pauk, seperti tempe, tahu, telur, sambal, dan mie. Setiap piring menawarkan perpaduan rasa manis, gurih, pedas, dan segar, menciptakan pengalaman kuliner yang kaya dan beragam.",
            price: "Rp10.000/Porsi",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727523384/Nasi_Campur_1_b5uhbc.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.7996351166057!2d114.15725817405712!3d-8.2228944825315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd14d44ee6218eb%3A0x27e94bfd7df10d37!2sPasar%20Sumber%20Arum%2C%20Sragi%20-%20Songgon!5e0!3m2!1sid!2sid!4v1727574578152!5m2!1sid!2sid",
      footer: {
        noHp: "085228521470",
        alamat: "Songgon SumberArum, Dusun pasar",
      },
    },
    "olahan-masakan-rohimah": {
      title: "Olahan Masakan Rohimah",
      icon: null,
      navbarTitle: "Olahan Masakan Rohimah",
      ctaLink: "https://wa.me/083827948363",
        keyword: [
          "Nasi Campur Enak",
          "Nasi Campur Terdekat",
          "Nasi Campur Murah",
          "Kuliner Nasi Campur",
          "Warung Nasi Campur",
          "Nasi Campur Spesial",
          "Nasi Campur Tradisional",
          "Nasi Campur Khas Indonesia",
          "Nasi Campur Favorit",
          "Menu Nasi Campur Lezat",
          "Nasi Campur Halal",
          "Usaha Nasi Campur UMKM",
          "Warung Makan Nasi Campur",
          "Restoran Nasi Campur",
          "Nasi Campur Untuk Acara",
          "Pesan Antar Nasi Campur",
        ],
        color: {
          primary: "bg-[#255941]",
          secondary: "bg-[#B7BF75]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#B7BF75]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#F29D35]",
        },

      hero: {
        tagLine: "Nasi Campur Spesial, Porsi Lezat untuk Anda!",
        deskripsi:
          "Kami menyajikan Nasi Campur Spesial dengan pilihan lauk-pauk terbaik yang siap memanjakan lidah Anda. Setiap porsinya diracik dengan perpaduan rasa yang pas, menghadirkan kelezatan yang melimpah di setiap suapan. Cocok untuk Anda yang mencari hidangan nikmat dengan porsi yang memuaskan, siap dinikmati kapan saja, untuk segala suasana.",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727523800/logo_nasi_campur_2_rvy57s.png",
      },
      about: {
        title: "Tentang",
        txt: "Menggabungkan Bahan Terbaik untuk Menghasilkan Rasa Terbaik",
        deskripsi:
          "Kami selalu memilih bahan-bahan berkualitas tinggi untuk memastikan setiap hidangan yang kami sajikan memiliki rasa yang autentik dan lezat.Mulai dari nasi hingga lauk pauk, diolah dengan hati-hati untuk menghadirkan rasa yang memuaskan. Dengan kombinasi bumbu khas dan bahan segar, kami memberikan pengalaman kuliner yang tak hanya memanjakan lidah, tapi juga meninggalkan kesan mendalam.",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727523800/logo_nasi_campur_2_rvy57s.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Nasi Campur",
            deskripsi:
              "Nasi Campur adalah sajian khas Indonesia yang menyajikan nasi dengan berbagai lauk-pauk pendamping, seperti  telur, mie, tempe, sambal, dan kerupuk. Setiap porsinya menawarkan kombinasi rasa gurih, manis, pedas, dan segar, menciptakan harmoni rasa yang memanjakan lidah. Nasi Campur cocok dinikmati kapan saja",
            price: "Rp10.000/Porsi",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727523803/Nasi_Campur_2_xmw7lw.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5371.00877544073!2d114.24849361818809!3d-8.287956581795232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15167e899231b%3A0x5a901a5446a22185!2sWijenan%20Lor%2C%20Singolatren%2C%20Kec.%20Singojuruh%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727575717813!5m2!1sid!2sid",
      footer: {
        noHp: "083827948363",
        alamat: "Dusun Wijenan Lor",
      },
    },
    "rujak-lontong": {
      title: "Rujak Lontong",
      icon: null,
      navbarTitle: "Rujak Lontong",
      ctaLink: "https://wa.me/083827948363",
        keyword: [
          "Rujak Lontong Enak",
          "Rujak Lontong Terbaik",
          "Resep Rujak Lontong",
          "Rujak Lontong Sehat",
          "Jajanan Tradisional Rujak Lontong",
          "Rujak Lontong Murah",
          "Rujak Lontong Pedas",
          "Rujak Lontong untuk Catering",
          "Rujak Lontong Delivery",
          "Rujak Lontong Online",
          "Tempat Makan Rujak Lontong",
          "Rujak Lontong Segar",
          "Rujak Lontong Spesial",
          "Rujak Lontong Viral",
        ],
        color: {
          primary: "bg-[#357309]",
          secondary: "bg-[#BABF1F]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#BABF1F]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#F28F38]",
        },

      hero: {
        tagLine:
          "Rujak Lontong Spesial: Cita Rasa Tradisional yang Tak Terlupakan!",
        deskripsi:
          "Kami menyajikan rujak lontong yang terbuat dari bahan-bahan segar pilihan, dipadukan dengan bumbu khas yang menggugah selera.Dengan rasa pedas, manis, dan segar yang sempurna. Rujak Lontong Spesial adalah pilihan yang tepat. Bergabunglah dengan kami dan rasakan pengalaman kuliner yang tak terlupakan!",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727574101/logo_rujak_a8ua1o.png",
      },
      about: {
        title: "Tentang",
        txt: "Tradisi yang Tercipta, Rasa yang Tak Terlupakan!",
        deskripsi:
          "Di Rujak Lontong Spesial, kami percaya bahwa setiap hidangan adalah sebuah cerita. Setiap bahan yang kami gunakan dipilih dengan hati-hati, memastikan kualitas dan kesegaran yang terbaik. Dengan perpaduan rasa pedas, manis, dan asam, rujak lontong kami menawarkan pengalaman kuliner yang tak terlupakan. Bergabunglah bersama kami dan rasakan bagaimana tradisi dapat diciptakan dan dihidangkan dalam setiap suapan!",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727574101/logo_rujak_a8ua1o.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Rujak Lontong",
            deskripsi:
              "Rujak lontong adalah jajanan tradisional Indonesia yang menggabungkan kesegaran lontong (nasi yang dikukus dalam daun) dengan bumbu rujak yang pedas, manis, dan asam. Disajikan dengan potongan sayuran segar,dan tambahan bumbu kacang, rujak lontong menawarkan perpaduan rasa yang menggugah selera. ",
            price: "Rp10.000",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727574099/rujak_lontong_z5ew48.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12098.041855556303!2d114.19845517269121!3d-8.360558890690365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd155b0485a9859%3A0x960265770a27a4b4!2sRimpis%2C%20Sumbersari%2C%20Kec.%20Srono%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727594664419!5m2!1sid!2sid",
      footer: {
        noHp: null,
        alamat: "Dusun Rimpis RT/RW 003/001 Sumbersari Srono",
      },
    },
    "kedai-sambal-belut": {
      title: "Kedai Sambal Belut",
      icon: null,
      navbarTitle: "Kedai Sambal Belut",
      ctaLink: "https://wa.me/081287781634",
        keyword: [
          "Sambal Belut Original",
          "Sambal Belut Enak",
          "Sambal Belut Pedas",
          "Sambal Belut Khas Daerah",
          "Sambal Belut Terbaik",
          "Sambal Belut untuk Resep",
          "Jual Sambal Belut Online",
          "Sambal Belut Buatan Sendiri",
          "Sambal Belut Organik",
          "Sambal Belut Fresh",
          "Sambal Belut untuk Hidangan Sehari-hari",
          "Sambal Belut dengan Bahan Alami",
          "Sambal Belut Terjangkau",
          "Resep Mengolah Sambal Belut",
          "Sambal Belut Paling Populer",
        ],
        color: {
          primary: "bg-[#730A0A]",
          secondary: "bg-[#A61103]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#A61103]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#0D0D0D]",
        },

      hero: {
        tagLine: "Nikmati Keunikan Sambal Belut, Cita Rasa yang Tak Terlupakan!",
        deskripsi:
          "Kami menghadirkan sambal belut yang terbuat dari bahan-bahan pilihan, memberikan rasa yang kaya dan autentik. Setiap sendok sambal kami adalah pengalaman tak terlupakan yang akan menggugah selera Anda. Cocok untuk semua hidangan, sambal belut kami siap menambah kelezatan setiap momen makan Anda.",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727590403/logo_sambel-removebg-preview_dc0ixu.png",
      },
      about: {
        title: "Tentang",
        txt: "Di Balik Sambal Belut: Cita Rasa Asli yang Terjaga!",
        deskripsi:
          "Di Balik Sambal Belut, kami berkomitmen untuk menjaga cita rasa asli sambal yang telah diwariskan turun-temurun. Setiap produk kami dibuat dengan hati-hati, menggabungkan belut segar dan bumbu pilihan yang diolah dengan teknik tradisional. Bergabunglah dengan kami untuk menikmati sambal yang tidak hanya lezat, tetapi juga kaya akan sejarah dan rasa!",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727590403/logo_sambel-removebg-preview_dc0ixu.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Sambal Belut",
            deskripsi:
              " Sambal Belut adalah sambal khas yang ditambah belut segar dan bumbu alami pilihan, memberikan rasa yang unik dan menggugah selera. Dengan tekstur yang lembut dan cita rasa yang kaya, sambal ini menjadi pelengkap sempurna untuk berbagai hidangan, mulai dari nasi hingga lauk pauk. Rasakan keunikan Sambal Belut dan jadikan setiap hidangan lebih istimewa!",
            price: "Rp20.000",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727525476/sambal_belut_h09nwe.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11784.749629543985!2d114.18198901431751!3d-8.357662440515481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd15500a282fb49%3A0x3782a217d1e05a2f!2sTemurejo%2C%20Kembiritan%2C%20Kec.%20Genteng%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727590180250!5m2!1sid!2sid",
      footer: {
        noHp: "081287781634",
        alamat: "Dusun Temurejo RT 001 RW 006 Kembiritan Genteng",
      },
    },
    "tempe-wahyudi": {
      title: "Tempe Wahyudi",
      icon: null,
      navbarTitle: "Tempe Wahyudi",
      ctaLink: "https://wa.me/082331582363",
        keyword: [
          "Tempe Organik",
          "Tempe Kualitas Terbaik",
          "Tempe Sehat dan Bergizi",
          "Resep Tempe Lezat",
          "Tempe Sumber Protein",
          "Tempe untuk Diet Sehat",
          "Pembelian Tempe Online",
          "Tempe Segar dari UMKM",
          "Tempe Tradisional",
          "Sertifikasi Halal Tempe",
          "Tempe untuk Makanan Sehat",
          "Tempe Murah Berkualitas",
          "Tempe Homemade",
          "Varian Olahan Tempe",
          "Cara Membuat Tempe Sendiri",
        ],
        color: {
          primary: "bg-[#D9B88F]",
          secondary: "bg-[#D9B88F]",
          backgroundColor: "bg-[#ffffff]",
          hoverColor: "hover:bg-[#F2B544]",
          textColor: "text-[#010010]",
          btnTextColor: "text-[#ffffff]",
          accentColor: "text-[#43592D]",
        },

      hero: {
        tagLine: "Dari Kedelai Terbaik, Tempe yang Menggugah Selera!",
        deskripsi:
          "Tempe diolah dari kedelai berkualitas tinggi yang dipilih dengan cermat. Kami berkomitmen untuk memberikan Anda tempe yang tidak hanya lezat tetapi juga bergizi. Dengan proses pembuatan yang tradisional dan penuh cinta, setiap gigitan tempe kami menawarkan cita rasa otentik yang menggugah selera",
        btn: true,
        btnText: "Pesan sekarang",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727509669/logo_tempe_vakeq1.png",
      },
      about: {
        title: "Tentang",
        txt: "Mengolah Kedelai Terbaik dengan Cinta dan Ketelitian",
        deskripsi:
          "Di usaha tempe kami, setiap langkah pembuatan dilakukan dengan cinta dan ketelitian. Kami memilih kedelai terbaik untuk memastikan kualitas dan rasa tempe yang optimal. Proses fermentasi kami dijaga secara cermat, menggabungkan tradisi dan inovasi untuk menciptakan tempe yang lezat dan bergizi",
        img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727509669/logo_tempe_vakeq1.png",
        btn: true,
        btnText: "Pesan sekarang",
      },
      product: {
        title: "Produk Kami",
        data: [
          {
            name: "Tempe",
            deskripsi:
              "Tempe adalah produk fermentasi kedelai yang kaya akan protein dan nutrisi. Dengan tekstur padat dan rasa yang khas, tempe sering digunakan sebagai alternatif daging dalam berbagai masakan. Tempe tidak hanya sehat, tetapi juga mudah diolah, menjadikannya pilihan sempurna untuk hidangan lezat dan bergizi",
            price: "Rp5.000",
            img: "https://res.cloudinary.com/dm43j5fur/image/upload/v1727509671/produk_tempe_lwhcu0.jpg",
          },
        ],
      },
      location:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15789.33767613489!2d114.14335098276713!3d-8.368726737331855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd1553045436d1d%3A0xb17ec43066e6da6f!2sDusun%20Sawahan%2C%20Genteng%20Kulon%2C%20Kec.%20Genteng%2C%20Kabupaten%20Banyuwangi%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1727509433871!5m2!1sid!2sid",
      footer: {
        noHp: "082331582363",
        alamat: "Dusun Sawahan Desa Genteng Kulon, kec. Genteng",
      },
    },
  };
  
  export default dataWildan;
  