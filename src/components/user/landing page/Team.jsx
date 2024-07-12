import { Card, Image, CardHeader, CardFooter } from '@nextui-org/react';
import React from 'react';

const Team = () => {
  return (
    <div className='max-w-screen-lg mx-auto flex flex-col justify-between gap-16 items-center lg:px-0 px-6 scroll-mt-[8vh' id='team'>
      <div className='flex flex-col justify-between gap-3 items-center'>
        <h4 className='text-lg text-[#4F5CDF] font-normal'>Tim Kami</h4>
        <h1 className='text-4xl font-medium text-center text-[#091232]'>Meet Our Team</h1>
        <p className='text-center text-[#66676A]'>AHLI & TERAMPIL  Mereka memiliki kemampuan dan pengalaman <br /> yang luas, serta motivasi dan komitmen yang tinggi.</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 lg:gap-20 gap-14">
        <div className='justify-between flex items-center flex-col gap-3'>
          <Image src={'/profile_pict.svg'}/>
          <div className='flex flex-col w-full items-center'>
            <h4 className='text-lg font-medium'>Dela Tri Wulandari</h4>
            <p className='text-md  text-[#66676A] text-center'>Customer Relationship</p>
          </div>
        </div>
        <div className='justify-between flex items-center flex-col gap-3'>
          <Image src={'/profile_pict (1).svg'}/>
          <div className='flex flex-col w-full items-center'>
            <h4 className='text-lg font-medium'>Theo Fillus J</h4>
            <p className='text-md  text-[#66676A]'>Designer</p>
          </div>
        </div>
        <div className='justify-between flex items-center flex-col gap-3'>  
          <Image src={'/profile_pict (2).svg'}/>
          <div className='flex flex-col w-full items-center'>
            <h4 className='text-lg font-medium'>Moh. Haris Sofyan</h4>
            <p className='text-md  text-[#66676A]'>Programmer</p>
          </div>
        </div>
        <div className='justify-between flex items-center flex-col gap-3'>
          <Image src={'/profile_pict (3).svg'}/>
          <div className='flex flex-col w-full items-center'>
            <h4 className='text-lg font-medium'>Yasmin Azzahra</h4>
            <p className='text-md  text-[#66676A]'>Content Creator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;