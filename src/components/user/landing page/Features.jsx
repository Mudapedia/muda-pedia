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

      <div className="w-full flex flex-col">
        <div className="flex gap-8 pb-5 border-b lg:flex-row flex-col lg:items-center items-start">
          <div className="pe-3">
            <p className="text-[#66676A] text-lg">01</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium">Pembuatan Konten & Kelola Sosial Media</h1>
            <p className="text-[#66676A] text-base">Dengan tim yang berdedikasi dan solusi yang cerdas, Viraliz siap membantu usaha anda mencapai keberhasilan di dunia digital melalui strategi pengelolaan sosial media yang efektif</p>
          </div>
          <div className={`w-[50px] h-[50px]`} onClick={() => open('https:youtube.com')}>
            <ArrowRightUp/>
          </div>
        </div>
        <div className="flex gap-8 pb-5 border-b lg:flex-row flex-col lg:items-center items-start">
          <div className="pe-3">
            <p className="text-[#66676A] text-lg">02</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium">Pembuatan Aplikasi Mobile & Website</h1>
            <p className="text-[#66676A] text-base">Brogrammer, sebagai ahli dalam pembuatan aplikasi web dan mobile. Dengan tim pengembang yang berpengalaman kami siap memberikan solusi teknologi terdepan untuk memenuhi kebutuhan bisnis anda</p>
          </div>
          <div className={`w-[50px] h-[50px]`} onClick={() => open('https:youtube.com')}>
            <ArrowRightUp/>
          </div>
        </div>
        <div className="flex gap-8 pb-5 border-b lg:flex-row flex-col lg:items-center items-start">
          <div className="pe-3">
            <p className="text-[#66676A] text-lg">03</p>
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-medium">UI/UX Desain</h1>
            <p className="text-[#66676A] text-base">Sebagai UI/UX Design agency, UIStellar Studio memahami bahwa antarmuka pengguna yang menarik dan pengalaman pengguna yang optimal adalah fondasi kesuksesan digital.</p>
          </div>
          <div className={`w-[50px] h-[50px]`} onClick={() => open('https:youtube.com')}>
            <ArrowRightUp/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;