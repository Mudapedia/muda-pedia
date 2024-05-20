import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';



const Ourclient = () => {
  const [data, setData] = useState([]);

  const getClient = async () => {
    try {
      const resp = await axios.get('./client.json');
      setData(resp.data.client);
      // console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClient();
  }, [data]);

  return (
    <div className='flex flex-col max-w-screen-lg mx-auto w-full gap-10'>
      <div className='flex max-w-screen-lg mx-auto w-full gap-16 justify-between'>
        <div className='w-1/2 lg:block md:hidden hidden h-80 bg-[url(https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover rounded-xl bg-center shadow-lg shadow-gray-400'></div>
        <div className='flex lg:w-1/2 md:w-full w-full lg:px-0 px-6 flex-col gap-3 items-start'>
          <div className='flex items-center px-3 gap-2 rounded-full border-2'>
            <div className='w-2 h-2 rounded-full bg-[#4F5CDF]'></div>
            <p className='text-[12px] mb-0 text-gray-500'>Our Clients</p>
          </div>
          <p className='text-gray-500'>
            At Mudapedia, we take immense pride in our diverse and esteemed clientele. Our clients span various industries and sectors, each benefiting from our innovative solutions and dedicated service. We believe in building long-term relationships based on trust, transparency, and mutual growth. <span className='text-[#4F5CDF] font-semibold'>Here are some of the valued clients who have chosen Mudapedia as their trusted partner:</span>
          </p>
          <button className='px-5 py-2 bg-[#4F5CDF] text-white rounded-md' onClick={() => window.open('https://api.whatapps.com/message/62895621048269')}>
            Contact Us!
          </button>
        </div>
      </div>
      <div className='lg:block hidden max-w-screen-lg mx-auto'>
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className=' w-full flex flex-col items-start lg:h-52 bg-gray-100 rounded-xl py-4 px-5 gap-5'>
              <img src={item.logo} alt="" width={50} height={50} />
              <p className='text-[12px] font-medium'>{item.descriptions}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className='lg:hidden block max-w-screen-lg mx-auto px-6'>
        <div className='grid w-full gap-5 grid-cols-2'>
          {data.map((item, index) => {
            return (
              <div className=' w-full flex flex-col items-start lg:h-52 bg-gray-100 rounded-xl py-4 px-5 gap-5'>
                <img src={item.logo} alt="" width={50} height={50} />
                <p className='text-[12px] font-medium'>{item.descriptions}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Ourclient;
