import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import Plus from '../../../assets/icons/Plus';

const Faq = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

  return (
    <div className='max-w-screen-md mx-auto flex flex-col justify-between gap-16 items-center lg:px-0 px-6 scroll-mt-[10vh]' id='faq'>
      <div className='flex flex-col justify-between gap-3 items-center'>
        <h4 className='text-lg text-[#4F5CDF] font-normal'>FAQ</h4>
        <h1 className='text-4xl font-medium text-center text-[#091232]'>Frequently Asked Question</h1>
        <p className='text-center text-[#66676A]'>Jika pertanyaan Anda tidak terjawab, jangan ragu untuk <br /> menghubungi tim dukungan kami.</p>
      </div>
      <Accordion className='' defaultExpandedKeys={["apa"]}>
        <AccordionItem key="apa" aria-label="apa" indicator={<Plus/>}  title="Apa itu MudaPedia" className='font-medium'>
          <p className='text-[#66676A] font-normal text-lg'>Kami, di Mudapedia, memahami bahwa era digital telah membuka pintu menuju peluang yang tak terbatas, dan kami hadir sebagai solusi yang cerdas dan terpercaya untuk membantu Anda mengembangkan bisnis dalam dunia yang terus berubah. </p>
          <p className='mt-8 text-[#66676A] font-normal text-lg pb-3'>Visi kami menjadi Perusahaan Digital Agency yang terdepan dalam membantu para pebisnis mengembangkan usahanya</p>
        </AccordionItem>
        <AccordionItem key="brogrammer" aria-label="brogrammer" indicator={<Plus/>}  title="Apa itu Brogrammer?" className='font-medium'>
          <p className='text-[#66676A] font-normal text-lg'>Brogrammer merupakan lini usaha dari MudaPedia, kami menawarkan layanan pembuatan aplikasi mobile & website </p>
          <p className='mt-8 text-[#66676A] font-normal text-lg pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora dicta totam dolorum quidem voluptatem repellendus minima quis qui, quae quaerat mollitia omnis voluptatum sapiente perferendis quo est. Eos, quo!</p>
        </AccordionItem>
        <AccordionItem key="viraliz" aria-label="viraliz" indicator={<Plus/>}  title="Apa itu Viraliz?" className='font-medium'>
          <p className='text-[#66676A] font-normal text-lg'>Viraliz merupakan lini usaha dari MudaPedia, kami menawarkan layanan pengelolaan sosial media untuk usaha anda</p>
          <p className='mt-8 text-[#66676A] font-normal text-lg pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora dicta totam dolorum quidem voluptatem repellendus minima quis qui, quae quaerat mollitia omnis voluptatum sapiente perferendis quo est. Eos, quo!</p>
        </AccordionItem>
        <AccordionItem key="uistellar" aria-label="uistellar" indicator={<Plus/>}  title="Apa itu UIStellar Studio?" className='font-medium'>
          <p className='text-[#66676A] font-normal text-lg'>UIStellar Studio merupakan lini usaha dari MudaPedia, kami menawarkan layanan pembuatan desain UI/UX aplikasi mobile & website</p>
          <p className='mt-8 text-[#66676A] font-normal text-lg pb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora dicta totam dolorum quidem voluptatem repellendus minima quis qui, quae quaerat mollitia omnis voluptatum sapiente perferendis quo est. Eos, quo!</p>
        </AccordionItem>
      </Accordion>

    </div>
  );
};

export default Faq;