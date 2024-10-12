import { ArrowRightUp } from "../../../assets/icons/Icons";

const Features = () => {
  const data = [
    {
      title: "Market Mudapedia",
      desc: `Mudapedia adalah platform pasar online yang menawarkan berbagai
              produk digital dan fisik, dirancang untuk memenuhi kebutuhan Anda
              dalam satu tempat. Temukan produk inovatif, mudah diakses, dan
              sesuai dengan tren terbaru di Mudapedia. Nikmati pengalaman
              berbelanja yang cepat, aman, dan nyaman!`,
      url: "https://market.mudapedia.my.id/",
    },
    {
      title: "Pembuatan Konten & Kelola Sosial Media",
      desc: `Dengan tim yang berdedikasi dan solusi yang cerdas, Viraliz siap
              membantu usaha anda mencapai keberhasilan di dunia digital melalui
              strategi pengelolaan sosial media yang efektif.`,
      url: "https://viralizz.vercel.app/",
    },
    {
      title: "Pembuatan Aplikasi Mobile & Website",
      desc: `Brogrammer, sebagai ahli dalam pembuatan aplikasi web dan mobile.
              Dengan tim pengembang yang berpengalaman kami siap memberikan
              solusi teknologi terdepan untuk memenuhi kebutuhan bisnis anda.`,
      url: "https://brogrammer.netlify.app/",
    },
    {
      title: "UI/UX Desain",
      desc: `Sebagai UI/UX Design agency, UIStellar Studio memahami bahwa
              antarmuka pengguna yang menarik dan pengalaman pengguna yang
              optimal adalah fondasi kesuksesan digital.`,
      url: "https://www.uistellar.com/",
    },
    {
      title: "Pavo Coin",
      desc: `Pavo Official adalah perusahaan teknologi berpikiran maju yang
              berdedikasi untuk memajukan aset digital dan industri blockchain.
              PavoCoin adalah produk andalan kami, yang dirancang untuk
              merevolusi cara orang terlibat dengan mata uang digital dan NFT
              (Non-Fungible Tokens).`,
      url: "https://pavocoin.xyz/",
    },
    {
      title: "Pavo NFT Marketplace",
      desc: `Pasar NFT untuk PavoCoin di jaringan Solana. Proyek ini juga
              menggunakan nama koin PavoCoin untuk menjual dan membeli NFT di
              PavoCoin.`,
      url: "https://market.pavocoin.xyz/",
    },
  ];
  return (
    <div
      className="max-w-screen-lg mx-auto flex flex-col justify-between gap-16 items-center lg:px-0 px-6 scrol-m-[100vh]"
      id="layanan"
    >
      <div className="flex flex-col justify-between gap-3 items-center">
        <h4 className="text-lg text-[#4F5CDF] font-normal">Layanan Kami</h4>
        <h1 className="text-4xl font-medium text-center text-[#091232]">
          Apa yang Kami Kerjakan
        </h1>
        <p className="text-center text-[#66676A]">
          Tim kami menawarkan solusi inovatif untuk membantu Anda mencapai{" "}
          <br /> tujuan bisnis Anda dalam era digital yang terus berkembang.
        </p>
      </div>

      <div className="w-full flex flex-col gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex gap-8 pb-5 border-b lg:flex-row flex-col lg:items-center items-start"
          >
            <div className="pe-3">
              <p className="text-[#66676A] text-2xl">0{index + 1}</p>
            </div>
            <div className="flex flex-col gap-1">
              <button
                className="text-3xl font-medium text-left"
                onClick={() => open(item.url)}
              >
                {item.title}
              </button>
              <p className="text-[#66676A] text-base">{item.desc}</p>
            </div>
            <button
              className={`w-[50px] h-[50px] hover:opacity-50 transition-opacity`}
              onClick={() => open(item.url)}
            >
              <ArrowRightUp />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
