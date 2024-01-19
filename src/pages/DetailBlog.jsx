import React from 'react';
import NavigationBar from '../components/user/Navbar';
import Footer from '../components/user/Footer';
import { useParams } from 'react-router-dom';
import { Link,Button,Image } from '@nextui-org/react';
import {  } from '@nextui-org/react';
import "./DetailBlog.css"
import dateformat from 'dateformat';
import { ArrowGreyRight } from '../assets/icons/Icons';


const DetailBlog = () => {
  const { article } = useParams();

  const title = "Kisah Angin Tak Punya KTP"
  const thumbnail = "https://images.unsplash.com/photo-1682695796954-bad0d0f59ff1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const content = "<h1 style=\"text-align: justify;\" data-sourcepos=\"3:1-3:239\">Ini harusnya text besar!!</h1>\n<p style=\"text-align: justify;\" data-sourcepos=\"3:1-3:239\">Di sebuah <strong>negeri yang damai</strong>, hiduplah <em>Angin</em>, makhluk tak kasat mata yang selalu berkelana tanpa henti. Ia tak memiliki <span style=\"text-decoration: underline;\">KTP</span>, tak memiliki identitas, dan tak memiliki tempat tinggal. Ia hanya dikenal sebagai Angin, si pengembara tanpa batas.</p>\n<p style=\"text-align: justify;\" data-sourcepos=\"5:1-5:258\">Suatu hari, Angin berhembus ke sebuah desa kecil. Di sana, ia bertemu dengan seorang gadis kecil bernama Laras. Laras adalah anak yang ceria dan suka bermain di luar ruangan. Ia senang bermain layang-layang, dan Angin pun menjadi teman bermainnya yang setia.</p>\n<p style=\"text-align: justify;\" data-sourcepos=\"7:1-7:234\">Setiap hari, Laras dan Angin bermain bersama. Mereka berlari di padang rumput, menerbangkan layang-layang tinggi-tinggi, dan bercanda ria di bawah sinar matahari. Angin tak pernah merasa kesepian lagi karena Laras selalu ada untuknya.</p>\n<p data-sourcepos=\"7:1-7:234\"><img style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://images.unsplash.com/photo-1682686578023-dc680e7a3aeb?q=80&amp;w=2070&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\" alt=\"ilustrasi 1\" width=\"419\" height=\"279\"></p>\n<p data-sourcepos=\"7:1-7:234\">Namun, kebahagiaan mereka tak berlangsung lama. Suatu hari, datanglah segerombolan orang yang ingin menangkap Angin. Mereka berkata bahwa Angin adalah makhluk berbahaya yang bisa membawa penyakit. Laras berusaha melindungi Angin, tapi ia tak berdaya.</p>\n<p style=\"text-align: justify;\" data-sourcepos=\"11:1-11:174\">Angin pun ditangkap dan dimasukkan ke dalam kurungan. Ia meronta-ronta, berusaha untuk bebas, tapi tak ada gunanya. Ia tak bisa melawan manusia dengan kekuatannya yang kecil.</p>\n<p style=\"text-align: justify;\" data-sourcepos=\"13:1-13:167\">Laras sedih melihat Angin terkurung. Ia tak tega melihat temannya yang begitu bebas dan ceria kini terbelenggu dalam kurungan. Ia pun berusaha untuk membebaskan Angin.</p>\n<p style=\"text-align: justify;\" data-sourcepos=\"15:1-15:117\">Laras mencari cara untuk membuka kurungan Angin. Ia mencoba berbagai cara, dan akhirnya ia berhasil. Angin pun bebas!</p>\n<p style=\"text-align: justify;\" data-sourcepos=\"17:1-17:136\">Angin berterima kasih kepada Laras atas pertolongannya. Ia berjanji akan selalu menjadi teman Laras dan tak akan pernah meninggalkannya.</p>\n<p style=\"text-align: justify;\" data-sourcepos=\"19:1-19:190\">Angin dan Laras pun kembali bermain bersama. Mereka berlari, menerbangkan layang-layang, dan bercanda ria. Kali ini, mereka lebih bahagia karena mereka tahu bahwa mereka akan selalu bersama.</p>"
  const date = "2024-01-14T01:54:19.766Z";
  const LocalDate = dateformat(date, "d mmmm yyyy");
  
  const setHTML= (content) => {
    return(
      <div dangerouslySetInnerHTML={{__html:content}} />
    )
  }

  const styles = {
    all : 'unset',
  }
  
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