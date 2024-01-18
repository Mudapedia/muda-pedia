import React from 'react';
import { Button } from '@nextui-org/react';
import {ArrowGreyRight} from '../../../assets/icons/Icons.jsx'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section className='max-w-screen-lg mx-auto sm:flex gap-8 px-6 lg:px-0'>

      {/* left content */}
      <div className='mb-10'>
        <h2 className='text-2xl text-[#4F5CDF] font-medium'>Blog Kami</h2>
        <h1 className='text-4xl text-[#091232] font-medium py-3'>Tulisan Terbaru</h1>
        <p className='text-lg text-[#66676A]'
        >Mulai Eksplor dan temukan tips, insight dan inspirasi menarik</p>
        <Button className='font-medium text-[#66676A] bg-[#F5F5F5] hover:bg-[#4F5CDF] hover:text-[#ffff] rounded-full mt-9 '>Semua Blog</Button>
      </div>

      {/* right content */}
      <div> {/* wrapper */}

        {/* content */}
        <div className='sm:flex py-5 sm:px-5 border-b-1 border-[#C8C8C8] cursor-pointer hover:bg-slate-100 hover:rounded-sm' onClick={()=>{open('https://www.youtube.com')}}>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-[#091232] font-medium'>Judul Blog 1</h2>
            <p className='text-[#BEBEBE]'>22 Januari 2023</p>
            <p className='text-[#66676A] mt-1'>Tim kami menawarkan solusi inovatif untuk membantu Anda mencapai tujuan bisnis Anda dalam era digital yang terus berkembang.</p>
          </div>
          <div className='flex items-center justify-end'>
            <ArrowGreyRight />
          </div>
        </div>

        {/* content */}
        <div className='sm:flex py-5 sm:px-5 border-b-1 border-[#C8C8C8] cursor-pointer hover:bg-slate-100 hover:rounded-sm' onClick={()=>{open('https://www.youtube.com')}}>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-[#091232] font-medium'>Apa yang Kami Kerjakan</h2>
            <p className='text-[#BEBEBE]'>22 Januari 2023</p>
            <p className='text-[#66676A] mt-1'>Tim kami menawarkan solusi inovatif untuk membantu Anda mencapai tujuan bisnis Anda dalam era digital yang terus berkembang.</p>
          </div>
          <div className='flex items-center justify-end'>
            <ArrowGreyRight />
          </div>
        </div>

        {/* content */}
        <div className='sm:flex py-5 sm:px-5 border-b-1 border-[#C8C8C8] cursor-pointer hover:bg-slate-100 hover:rounded-sm' onClick={()=>{open('https://www.youtube.com')}}>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl text-[#091232] font-medium'>Apa yang Kami Kerjakan</h2>
            <p className='text-[#BEBEBE]'>22 Januari 2023</p>
            <p className='text-[#66676A] mt-1'>Tim kami menawarkan solusi inovatif untuk membantu Anda mencapai tujuan bisnis Anda dalam era digital yang terus berkembang.</p>
          </div>
          <div className='flex items-center justify-end'>
            <ArrowGreyRight />
          </div>
        </div>

      </div> 

    </section>
  );
};

export default Blog;