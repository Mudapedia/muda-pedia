import { Button, Input } from '@nextui-org/react';
import React, { useState } from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-[#091232] py-6'>
      <div className='max-w-screen-lg mx-auto flex justify-between gap-16'>
        <div className='flex flex-col gap-16'>
          <div className='flex flex-col gap-3'>
            <h1 className='text-white text-4xl font-medium leading-relaxed'>Let's create a new <br /> obsession with us!</h1>
          </div>
          <div className='flex flex-col gap-3'>
            <p className='text-lg'>Subscribe Our Newsletter</p>
            <form action="mailto:helouistellar@gmail.com" className='flex gap-1'>
              <Input className='w-2/3 bg-[#1A2756]' type='email' label="Alamat Email"/>
              <Button></Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;