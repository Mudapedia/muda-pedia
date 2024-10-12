import { Card, Image, CardHeader, CardFooter } from "@nextui-org/react";
import React from "react";

const Team = () => {
  const pavoTeam = [
    {
      name: "Rafif Muhammad M.R",
      image: "/team/rafif.png",
      position: "Chief Executive Officer (CEO) & Co-Founder",
    },
    {
      name: "Gilang Arista R",
      image: "/team/gilang.png",
      position: "Chief Information Manager (CIM) & Co-Founder",
    },
    {
      name: "Theo Fillus J",
      image: "/team/theo.png",
      position: "Chief Technology Officer (CTO) & Co-Founder",
    },
    {
      name: "Reza Maulana",
      image: "/team/reza.png",
      position: "Chief Marketing Office & Co-Founder",
    },
    {
      name: "Fildzanu Ridwan",
      image: "/team/fildzanu.png",
      position: "Social Media Admin & Co-Founder",
    },
    {
      name: "Moh. Daffa Firdaus",
      image: "/team/daffa.png",
      position: "Social Media Admin & Co-Founder",
    },
    {
      name: "Moch Ramzi Daffa P",
      image: "/team/ramzi.png",
      position: "Fullstack Developer & Co-Founder",
    },
  ];

  const mudapediaTeam = [
    {
      name: "Hadiq, S.T, M.Kom",
      image: "/team/hadiq.jpg",
      position: "Advisor",
    },
    {
      name: "I Putu Indra W.S",
      image: "/team/pakPutu.png",
      position: "Founder of Digital blockchain indonesia",
    },
    // {
    //   name: "Junaidi Abdullah",
    //   image: "/team/make.jpeg",
    //   position: "Mentor",
    // },
    {
      name: "Omi Gusty Rifani",
      image: "/team/omi.png",
      position: "CEO MUDAPEDIA",
    },
    {
      name: "Aulia Muhammad Iqbal",
      image: "/team/iqbal.png",
      position: "Programmer",
    },
    {
      name: "Muhammad Mu’izzuddin",
      image: "/team/muiz.png",
      position: "Programmer",
    },
    {
      name: "Moh. Haris Sofyan",
      image: "/team/haris.png",
      position: "Programmer",
    },
    {
      name: "Yasmin Azzahra",
      image: "/team/yasmin.png",
      position: "Content Creator",
    },
    {
      name: "Syanofrizk Prasasti",
      image: "/team/syano.png",
      position: "Content Creator",
    },
    {
      name: "Fahmidia Hilda Maulida",
      image: "/team/hilda.png",
      position: "Finance Manager",
    },
    {
      name: "Dela Tri Wulandari",
      image: "/team/dela.png",
      position: "Marketing Manager",
    },
  ];

  return (
    <div
      className="max-w-screen-lg mx-auto w-full flex flex-col justify-between gap-16 items-center lg:px-0 px-6 scroll-mt-[8vh\"
      id="tim-kami"
    >
      <div className="flex flex-col justify-between gap-3 items-center">
        <h4 className="text-lg text-[#4F5CDF] font-normal">Tim Kami</h4>
        <h1 className="text-4xl font-medium text-center text-[#091232]">
          Meet Our Team
        </h1>
        <p className="text-center text-[#66676A]">
          AHLI & TERAMPIL Mereka memiliki kemampuan dan pengalaman <br /> yang
          luas, serta motivasi dan komitmen yang tinggi.
        </p>
      </div>
      <div className="flex items-start w-full justify-center">
        <div className="flex items-center flex-col gap-3">
          <img src="/logo-muda-pedia.png" alt="" className="w-28" />
          <h1 className="text-xl font-semibold">Mudapedia Teams</h1>
        </div>
      </div>

      {mudapediaTeam.slice(0, 1).map((item, index) => (
        <div className="flex justify-center items-center" key={index}>
          <div className="justify-between flex items-center flex-col gap-3">
            <Image src={item.image} className="rounded-full w-28" />
            <div className="flex flex-col w-full items-center">
              <h4 className="text-lg font-medium">{item.name}</h4>
              <p className="text-md  text-[#66676A] text-center">
                {item.position}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="grid lg:grid-cols-2 grid-cols-2 text-center lg:gap-0 gap-5 w-full place-items-center">
        {mudapediaTeam.slice(1, 3).map((item, index) => (
          <div
            className="justify-between flex items-center flex-col gap-3"
            key={index}
          >
            <Image src={item.image} className="rounded-full w-28" />
            <div className="flex flex-col w-full items-center">
              <h4 className="text-lg font-medium">{item.name}</h4>
              <p className="text-md  text-[#66676A] text-center">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 text-center lg:gap-0 gap-5 w-full place-items-center">
        {mudapediaTeam.slice(3, 7).map((item, index) => (
          <div
            className="justify-between flex items-center flex-col gap-3"
            key={index}
          >
            <Image src={item.image} className="rounded-full w-28" />
            <div className="flex flex-col w-full items-center">
              <h4 className="text-lg font-medium">{item.name}</h4>
              <p className="text-md  text-[#66676A] text-center">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 text-center lg:gap-0 gap-5 w-full place-items-center">
        {mudapediaTeam.slice(7, 11).map((item, index) => (
          <div
            className="justify-between flex items-center flex-col gap-3"
            key={index}
          >
            <Image src={item.image} className="rounded-full w-28" />
            <div className="flex flex-col w-full items-center">
              <h4 className="text-lg font-medium">{item.name}</h4>
              <p className="text-md  text-[#66676A] text-center">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start w-full justify-center">
        <div className="flex items-center flex-col gap-3">
          <img src="/team/logopavo.png" alt="" className="w-28" />
          <h1 className="text-xl font-semibold">Pavo Teams</h1>
        </div>
      </div>

      <div className="flex flex-wrap justify-center max-w-screen-md gap-10 items-center">
        {pavoTeam.map((item, index) => (
          <div
            className="justify-between flex items-center flex-col gap-3 w-[45%]"
            key={index}
          >
            <Image src={item.image} className="rounded-full w-28" />
            <div className="flex flex-col w-full items-center">
              <h4 className="text-lg font-medium">{item.name}</h4>
              <p className="text-md  text-[#66676A] text-center">
                {item.position}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
