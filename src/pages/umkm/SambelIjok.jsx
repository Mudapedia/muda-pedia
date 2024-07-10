import React from 'react';
import Navbars from '../../components/sambel-ijok/Navbars';
import { Button, Card, CardBody, CardHeader, Image } from '@nextui-org/react';

const SambelIjok = () => {
  return (
    <div>
      <Navbars />
      <div className='w-full max-w-screen-lg mx-auto flex flex-col gap-16 py-16 lg:px-0 px-6'>

        <div className='flex lg:flex-row flex-col justify-between items-center w-full h-[50vh] gap-5'>
          <div className='lg:w-1/2 w-full flex flex-col gap-3'>
            <h1 className='text-5xl font-medium leading-snug'>Rasanya Nendang, Harganya Mantap!</h1>
            <p className='text-gray-500'>Lalapan Sambel Ijo adalah hidangan tradisional Indonesia yang terdiri dari berbagai macam lalapan segar dan sambal ijo pedas yang mantap.</p>
            <div className='w-full'>
              <a href="tel:6285738667586"><Button color='secondary' size='md'>Kontak Kami</Button></a>
            </div>
          </div>

          <div className='lg:w-1/2 w-full lg:block hidden'>
            <img src="/bgsambel.svg" alt="" />
          </div>
        </div>

        <h1 className='text-4xl font-semibold text-center'>Produk Kami</h1>

        <div className='grid lg:grid-cols-3 grid-cols-1 w-full gap-5'>
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="rounded-xl w-full"
                src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163980/umkm/sambel%20ijok/IMG-20240606-WA0226_yjfnvn.jpg"

              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
              <h4 className="font-bold text-large">Lalapan Sambel Ijo dengan Tempe Goreng</h4>
              <small className="text-default-500">Tempe goreng tepung yang renyah dan gurih disajikan di atas lalapan segar dengan sambal ijo pedas. </small>
              <a href="tel:6285738667586"><Button color='secondary' size='md'>Pesan</Button></a>
            </CardHeader>
          </Card>
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="rounded-xl w-full"
                src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163983/umkm/sambel%20ijok/IMG-20240606-WA0227_j6xrow.jpg"

              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
              <h4 className="font-bold text-large">Lalapan Sambal Ijo dengan Udang Bakar Madu</h4>
              <small className="text-default-500">Udang segar berukuran jumbo yang dibakar dengan baluran madu hingga berwarna cokelat keemasan, disajikan di atas lalapan segar dengan sambal ijo pedas. </small>
              <a href="tel:6285738667586"><Button color='secondary' size='md'>Pesan</Button></a>
            </CardHeader>
          </Card>
          <Card className="py-4">
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="rounded-xl w-full"
                src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163983/umkm/sambel%20ijok/IMG-20240606-WA0228_cirejh.jpg"

              />
            </CardBody>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
              <h4 className="font-bold text-large">Paket Lalapan Sambal Ijo Komplit</h4>
              <small className="text-default-500">Paket Lalapan Sambel Ijo Komplit adalah pilihan yang tepat untuk dinikmati bersama keluarga atau teman.</small>
              <a href="tel:6285738667586"><Button color='secondary' size='md'>Pesan</Button></a>
            </CardHeader>
          </Card>

        </div>

        <div className='flex justify-between items-center w-full h-[50vh] gap-10 lg:flex-row-reverse flex-col'>
          <div className='lg:w-1/2 w-full flex flex-col gap-3'>
            <h1 className='text-5xl font-medium leading-snug'>Teman Terbaik Segala Lauk!</h1>
            <p className='text-gray-500'>Lalapan kami terbuat dari daun-daunan pilihan yang berkualitas dan diolah dengan cara higienis, sehingga aman dan menyehatkan.</p>

          </div>

          <div className='lg:w-1/2 w-full lg:block hidden'>
            <img src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163982/umkm/sambel%20ijok/IMG-20240606-WA0224_oiltvz.jpg" className='rounded-xl' alt="" />
          </div>
        </div>


        <h1 className='text-4xl font-semibold text-center'>Galery</h1>

        <div className='grid lg:grid-cols-4 grid-cols-2 w-full gap-5'>
          <Image
            alt="Card background"
            className="rounded-xl w-full"
            src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163986/umkm/sambel%20ijok/IMG-20240606-WA0221_py7lgn.jpg"
          />
          <Image
            alt="Card background"
            className="rounded-xl w-full"
            src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163985/umkm/sambel%20ijok/IMG-20240606-WA0223_tnbkq3.jpg"
          />
          <Image
            alt="Card background"
            className="rounded-xl w-full"
            src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163985/umkm/sambel%20ijok/IMG-20240606-WA0220_vscr7x.jpg"
          />
          <Image
            alt="Card background"
            className="rounded-xl w-full"
            src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163983/umkm/sambel%20ijok/IMG-20240606-WA0225_rv3qtt.jpg"
          />
          <Image
            alt="Card background"
            className="rounded-xl w-full"
            src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163983/umkm/sambel%20ijok/IMG-20240606-WA0227_j6xrow.jpg"
          />
          <Image
            alt="Card background"
            className="rounded-xl w-full"
            src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163983/umkm/sambel%20ijok/IMG-20240606-WA0228_cirejh.jpg"
          />
          <Image
            alt="Card background"
            className="rounded-xl w-full"
            src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163982/umkm/sambel%20ijok/IMG-20240606-WA0224_oiltvz.jpg"
          />
          <Image
            alt="Card background"
            className="rounded-xl w-full"
            src="https://res.cloudinary.com/dtiyid0pi/image/upload/v1720163980/umkm/sambel%20ijok/IMG-20240606-WA0226_yjfnvn.jpg"
          />
          

        </div>


        <div className='w-full rounded-lg flex items-center flex-col gap-10'>
          <h1 className='text-4xl font-semibold text-center'>Maps</h1>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3947.93895774728!2d114.28706287501058!3d-8.308865291726523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMTgnMzEuOSJTIDExNMKwMTcnMjIuNyJF!5e0!3m2!1sen!2sid!4v1720162502148!5m2!1sen!2sid" className='w-full h-[70vh] rounded-lg' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
      <div className='flex py-5 flex-col gap-5 items-center w-full bg-amber-100'>
        <h1 className='text-4xl font-semibold text-center'>Lalapan Sambel Ijok</h1>
        <p>No Hp: 085738667586 Alamat:Rogojampi</p>
        <p>© 2024  didukung oleh Mudapedia™. All Rights Reserved.</p>
        <a onClick={() => window.open('https://mudapedia.my.id')}><img src="/logo-muda-pedia.png" alt="" width={80} /></a>
      </div>
    </div>
  );
};

export default SambelIjok;