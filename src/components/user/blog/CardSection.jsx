import React, { useEffect, useState } from 'react';
import { ArrowGreyRight } from '../../../assets/icons/Icons';
import { Pagination } from '@nextui-org/react';
import Content from '../../../api/Content';
import dateFormat from 'dateformat';
import { Button, Link } from '@nextui-org/react';

const CardSection = () => {
  const [page, setPage] = useState(0)
  const [data, setData] = useState([])
  const [totalPage, setTotalPage] = useState(0)

  const getData = async () => {
    try {
      const resp = await Content.All(1, 4, "")
      setData(resp.data)
      const total = await Content.All()
      setTotalPage(total.data.length / 4)
    } catch (error) {
      console.log(error);
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
  return (
    <div className='max-w-screen-lg mx-auto lg:px-0 px-6 flex flex-col gap-16'>
      <div className='w-full grid grid-cols-1'>
        {data.map((item) => {
          const slugTitle = item.title.replace(/\s+/g, '-');

          return (
            <Link href={`/blog/${slugTitle}?article=${item._id}`}>
              <div className='flex gap-5 py-5 border-b border-[#F0F0F0] lg:flex-row flex-col lg:items-center items-start cursor-pointer'>
                <img src={item.thumbnail} alt="" className='rounded-lg' width={218} height={166} />
                <div className='flex flex-col gap-3'>
                  <h3 className='text-xl font-medium'>{item.title}</h3>
                  <p className='text-sm text-[#BEBEBE]'>{dateFormat(Date.now(item.created_at), "dddd dd mmm yyyy")}</p>
                  <p className='text-[#66676A] text-md max-h-28 overflow-hidden'>{setHtml(item.description)}</p>
                </div>
                <div>
                  <ArrowGreyRight />
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className='w-full flex justify-center pb-16'>
        <Pagination showControls color='' initialPage={1} total={totalPage} size='md' className='font-medium' onChange={(page) => setPage(page)} />
      </div>
    </div>
  );
};

export default CardSection;