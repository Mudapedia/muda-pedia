import { Accordion, AccordionItem } from "@nextui-org/react";
import React from 'react';
import { ArrowRightUp } from "../../../assets/icons/Icons";

const Features = () => {
  return (
    <div className='max-w-screen-lg mx-auto flex flex-col justify-between gap-16 items-center lg:px-0 px-6 scrol-m-[100vh]' id="features">
      <div className='flex flex-col justify-between gap-3 items-center'>
        <h4 className='text-lg text-[#4F5CDF] font-normal'>Layanan Kami</h4>
        <h1 className='text-4xl font-medium text-center text-[#091232]'>Apa yang Kami Kerjakan</h1>
        <p className='text-center text-[#66676A]'>Tim kami menawarkan solusi inovatif untuk membantu Anda mencapai <br /> tujuan bisnis Anda dalam era digital yang terus berkembang.</p>
      </div>

      <div className="w-full flex flex-col gap-5">
        <div className="flex gap-8 pb-5 border-b lg:flex-row flex-col lg:items-center items-start">
          <div className="pe-3">
            <p className="text-[#66676A] text-lg">01</p>
          </div>
          <div className="flex flex-col gap-1">
            <button className="text-3xl font-medium text-left" onClick={() => open('https://viralizz.vercel.app/')} >Pembuatan Konten & Kelola Sosial Media</button>
            <p className="text-[#66676A] text-base">Dengan tim yang berdedikasi dan solusi yang cerdas, Viraliz siap membantu usaha anda mencapai keberhasilan di dunia digital melalui strategi pengelolaan sosial media yang efektif</p>
          </div>
          <button className={`w-[50px] h-[50px] hover:opacity-50 transition-opacity`} onClick={() => open('https://viralizz.vercel.app/')}>
            <ArrowRightUp/>
          </button>
        </div>
        <div className="flex gap-8 pb-5 border-b lg:flex-row flex-col lg:items-center items-start">
          <div className="pe-3">
            <p className="text-[#66676A] text-lg">02</p>
          </div>
          <div className="flex flex-col gap-1">
            <button className="text-3xl font-medium text-left" onClick={() => open('https://brogrammer.netlify.app/')} >Pembuatan Aplikasi Mobile & Website</button>
            <p className="text-[#66676A] text-base">Brogrammer, sebagai ahli dalam pembuatan aplikasi web dan mobile. Dengan tim pengembang yang berpengalaman kami siap memberikan solusi teknologi terdepan untuk memenuhi kebutuhan bisnis anda</p>
          </div>
          <button className={`w-[50px] h-[50px] hover:opacity-50 transition-opacity`} onClick={() => open('https://brogrammer.netlify.app/')}>
            <ArrowRightUp/>
          </button>
        </div>
        <div className="flex gap-8 pb-5 border-b lg:flex-row flex-col lg:items-center items-start">
          <div className="pe-3">
            <p className="text-[#66676A] text-lg">03</p>
          </div>
          <div className="flex flex-col gap-1">
            <button className="text-3xl font-medium text-left" onClick={() => open('https://www.uistellar.com/')} >UI/UX Desain</button>
            <p className="text-[#66676A] text-base">Sebagai UI/UX Design agency, UIStellar Studio memahami bahwa antarmuka pengguna yang menarik dan pengalaman pengguna yang optimal adalah fondasi kesuksesan digital.</p>
          </div>
          <button className={`w-[50px] h-[50px] hover:opacity-50 transition-opacity`} onClick={() => open('https://www.uistellar.com/')}>
            <ArrowRightUp/>
          </button>
        </div>
        <div className="flex gap-8 border-b pb-5 lg:flex-row flex-col lg:items-center items-start">
          <div className="pe-3">
            <p className="text-[#66676A] text-lg">04</p>
          </div>
          <div className="flex flex-col gap-1">
            <button className="text-3xl font-medium text-left" onClick={() => open('https://pavocoin.xyz/')} >Pavo Coin</button>
            <p className="text-[#66676A] text-base">Pavo Official adalah perusahaan teknologi berpikiran maju yang berdedikasi untuk memajukan aset digital dan industri blockchain. PavoCoin adalah produk andalan kami, yang dirancang untuk merevolusi cara orang terlibat dengan mata uang digital dan NFT (Non-Fungible Tokens).</p>
          </div>
          <button className={`w-[50px] h-[50px] hover:opacity-50 transition-opacity`} onClick={() => open('https://pavocoin.xyz/')}>
            <ArrowRightUp/>
          </button>
        </div>
        <div className="flex gap-8 lg:flex-row flex-col lg:items-center items-start">
          <div className="pe-3">
            <p className="text-[#66676A] text-lg">05</p>
          </div>
          <div className="flex flex-col gap-1">
            <button className="text-3xl font-medium text-left" onClick={() => open('https://market.pavocoin.xyz/')}>Pavo NFT Marketplace</button>
            <p className="text-[#66676A] text-base">Pasar NFT untuk PavoCoin di jaringan Solana. Proyek ini juga menggunakan nama koin PavoCoin untuk menjual dan membeli NFT di PavoCoin.</p>
          </div>
          <button className={`w-[50px] h-[50px] hover:opacity-50 transition-opacity`} onClick={() => open('https://market.pavocoin.xyz/')}>
            <ArrowRightUp/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;