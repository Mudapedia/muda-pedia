const dataWildan = {
    "bakso-dan-teh-jumbo": {
      title: "Bakso Dan Teh Jumbo",
      icon: null,
      navbarTitle: "Bakso Dan Teh Jumbo",
      ctaLink: "null",
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
      ctaLink: "null",
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
      ctaLink: "null",
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
      ctaLink: "null",
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
      ctaLink: "null",
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
      ctaLink: "null",
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
  };
  
  export default dataWildan;
  