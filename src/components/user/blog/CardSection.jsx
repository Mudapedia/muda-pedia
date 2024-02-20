import React, { useEffect, useState } from 'react';
import { ArrowGreyRight } from '../../../assets/icons/Icons';
import { Pagination, Skeleton } from '@nextui-org/react';
import dateFormat from 'dateformat';
import { Link } from '@nextui-org/react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SimpleCrypto from "simple-crypto-js"

const CardSection = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [totalPage, setTotalPage] = useState(0)
  const navigate = useNavigate()

  const getData = async () => {
    try {
      const resp = await axios(`https://mudapedia.vercel.app/api/user/pagenation?page=${page}&limit=10`)
      setData(resp.data.content)
      setTotalPage(resp.data.totalPages)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [page])

  const setHtml = (str) => {
    let myContent = str.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, '').substring(0, 250) + '. . .'
    return (
      myContent
    )
  }

  const navigateId = (title, id) => {
    const key = 'wokwok'
    const simple = new SimpleCrypto(key)
    const encryptId = simple.encrypt(id)
    navigate(`/blog/${title}?article=${encryptId}`)
  }


  return (
    <div className='max-w-screen-lg mx-auto lg:px-0 px-6 flex flex-col gap-16 w-full'>
      <div className='w-full grid grid-cols-1'>
        {data.length > 0 ? (
          data.map((item) => {
            const slugTitle = item.title.replace(/\s+/g, '-')
            return (
              <div className='w-full hover:cursor-pointer' onClick={() => navigateId(slugTitle, item._id)}>
                <div className='flex gap-5 py-5 border-b border-[#F0F0F0] w-full lg:flex-row flex-col lg:items-center items-start cursor-pointer'>
                  <img src={item.thumbnail} alt="" className='rounded-lg' width={218} height={166} />
                  <div className='flex flex-col gap-3 w-full'>
                    <h3 className='text-xl font-medium'>{item.title}</h3>
                    <p className='text-sm text-[#BEBEBE]'>{dateFormat(Date.now(item.created_at), "dddd dd mmm yyyy")}</p>
                    <p className='text-[#66676A] text-md max-h-28 overflow-hidden'>{setHtml(item.description)}</p>
                  </div>
                  <div>
                    <ArrowGreyRight />
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <div>
            <div className='w-full hover:cursor-pointer'>
              <div className='flex gap-5 py-5 border-b border-[#F0F0F0] w-full lg:flex-row flex-col lg:items-center items-start cursor-pointer'>
                <Skeleton alt="" className='rounded-lg w-[218px] h-[190px]' />
                <div className='flex flex-col gap-3 w-full'>
                  <Skeleton className='w-1/2 h-4 rounded-md' />
                  <Skeleton className='w-1/4 mb-4 h-4 rounded-md' />
                  <Skeleton className='ms-16 h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                </div>
              </div>
            </div>
            <div className='w-full hover:cursor-pointer'>
              <div className='flex gap-5 py-5 border-b border-[#F0F0F0] w-full lg:flex-row flex-col lg:items-center items-start cursor-pointer'>
                <Skeleton alt="" className='rounded-lg w-[218px] h-[190px]' />
                <div className='flex flex-col gap-3 w-full'>
                  <Skeleton className='w-1/2 h-4 rounded-md' />
                  <Skeleton className='w-1/4 mb-4 h-4 rounded-md' />
                  <Skeleton className='ms-16 h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                  <Skeleton className='w-full h-2 rounded-md' />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='w-full flex justify-center pb-16'>
        <Pagination showControls color='' initialPage={1} total={totalPage} size='md' className='font-medium' onChange={(page) => setPage(page)} />
      </div>
    </div>
  );
};

export default CardSection;