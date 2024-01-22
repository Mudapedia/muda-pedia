import React, { useEffect, useState } from 'react';
import NavigationBar from '../components/user/Navbar';
import Footer from '../components/user/Footer';
import { useParams } from 'react-router-dom';
import { Link,Button,Image } from '@nextui-org/react';
import {  } from '@nextui-org/react';
import "./DetailBlog.css"
import dateformat from 'dateformat';
import { ArrowGreyRight } from '../assets/icons/Icons';
import Content from '../api/Content';


const DetailBlog = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const article = params.get('article');

  const [ title, setTitle ] = useState('')
  const [ thumbnail, setThumbnail ] = useState('')
  const [ content, setContent ] = useState('')
  const [ date, setDate ] = useState('')

  const getData = async () => {
    try {
      const datas = await Content.getByID(article);
      setTitle(datas.data.title);
      setThumbnail(datas.data.thumbnail);
      setContent(datas.data.description);
      setDate(datas.data.created_at);
    } catch (error) {
      console.log(error);
    }
  }

  const LocalDate = dateformat(date, "d mmmm yyyy");  
  const setHTML= (content) => {
    return(
      <div dangerouslySetInnerHTML={{__html:content}} />
    )
  }
  
  useEffect(()=>{
    getData();
  },[])

  return (
    <>
        <section className='max-w-screen-lg mx-auto my-9 px-6 lg:px-0'>
          <Link href='/blog'>
            <div className='flex mb-7 gap-2'>
              <div className='rotate-180 translate-y-[-4px]'>
                <ArrowGreyRight/>
              </div>
              <p className='text-[#66676A]'>Back</p>
            </div>
          </Link>
          <h1 className='text-[#091232] text-2xl font-medium m-0'>{ title }</h1>
          <p className='text-[#66676A] pt-1 pb-3'>{ LocalDate }</p>
          <div className='w-full min-h-96 rounded-xl'
          style={{
            backgroundImage : `url(${thumbnail})`,
            backgroundRepeat : 'no-repeat',
            backgroundSize : 'cover',
            backgroundPosition : 'center'
          }}></div>
          <div className='Blog'>
          { setHTML(content) }
          </div>
        </section>
        <Footer />
    </>
  );
};

export default DetailBlog;