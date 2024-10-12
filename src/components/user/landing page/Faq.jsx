import { Accordion, AccordionItem } from "@nextui-org/react";
import Plus from "../../../assets/icons/Plus";

const Faq = () => {
  return (
    <div
      className="max-w-screen-md w-full mx-auto flex flex-col justify-between gap-16 items-center lg:px-0 px-6 scroll-mt-[10vh]"
      id="faq"
    >
      <div className="flex flex-col justify-between gap-3 items-center">
        <h4 className="text-lg text-[#4F5CDF] font-normal">FAQ</h4>
        <h1 className="text-4xl font-medium text-center text-[#091232]">
          Frequently Asked Question
        </h1>
        <p className="text-center text-[#66676A]">
          Jika pertanyaan Anda tidak terjawab, jangan ragu untuk <br />{" "}
          menghubungi tim dukungan kami.
        </p>
      </div>
      <div className="w-full">
        <Accordion className="w-full" defaultExpandedKeys={["apa"]}>
          <AccordionItem
            key="apa"
            aria-label="apa"
            indicator={<Plus />}
            title="Apa itu MudaPedia"
            className="font-medium"
          >
            <p className="text-[#66676A] font-normal text-lg">
              Kami, di Mudapedia, memahami bahwa era digital telah membuka pintu
              menuju peluang yang tak terbatas, dan kami hadir sebagai solusi
              yang cerdas dan terpercaya untuk membantu Anda mengembangkan
              bisnis dalam dunia yang terus berubah.{" "}
            </p>
            <p className="mt-8 text-[#66676A] font-normal text-lg pb-3">
              Visi kami menjadi Perusahaan Digital Agency yang terdepan dalam
              membantu para pebisnis mengembangkan usahanya
            </p>
          </AccordionItem>
          <AccordionItem
            key="marketmudapedia"
            aria-label="marketmudapedia"
            indicator={<Plus />}
            title="Apa itu Market Mudapedia?"
            className="font-medium"
          >
            <p className="text-[#66676A] font-normal text-lg">
              Market Mudapedia adalah sebuah platform e-commerce yang
              menyediakan berbagai produk, baik digital maupun fisik. Di
              Mudapedia, Anda bisa menemukan beragam aset digital seperti
              software, template, dan desain, serta produk fisik seperti gadget,
              aksesori, dan kebutuhan sehari-hari. Kami berkomitmen untuk
              memberikan pengalaman belanja yang praktis, aman, dan terpercaya
              bagi semua pengguna.{" "}
            </p>
            <p className="mt-8 text-[#66676A] font-normal text-lg pb-3"></p>
          </AccordionItem>
          <AccordionItem
            key="brogrammer"
            aria-label="brogrammer"
            indicator={<Plus />}
            title="Apa itu Brogrammer?"
            className="font-medium"
          >
            <p className="text-[#66676A] font-normal text-lg">
              Brogrammer merupakan lini usaha dari MudaPedia, kami menawarkan
              layanan pembuatan aplikasi mobile & website{" "}
            </p>
            <p className="mt-8 text-[#66676A] font-normal text-lg pb-3"></p>
          </AccordionItem>
          <AccordionItem
            key="viraliz"
            aria-label="viraliz"
            indicator={<Plus />}
            title="Apa itu Viraliz?"
            className="font-medium"
          >
            <p className="text-[#66676A] font-normal text-lg">
              Viraliz merupakan lini usaha dari MudaPedia, kami menawarkan
              layanan pengelolaan sosial media untuk usaha anda
            </p>
            <p className="mt-8 text-[#66676A] font-normal text-lg pb-3"></p>
          </AccordionItem>
          <AccordionItem
            key="uistellar"
            aria-label="uistellar"
            indicator={<Plus />}
            title="Apa itu UIStellar Studio?"
            className="font-medium"
          >
            <p className="text-[#66676A] font-normal text-lg">
              UIStellar Studio merupakan lini usaha dari MudaPedia, kami
              menawarkan layanan pembuatan desain UI/UX aplikasi mobile &
              website
            </p>
            <p className="mt-8 text-[#66676A] font-normal text-lg pb-3"></p>
          </AccordionItem>
          <AccordionItem
            key="pavo"
            aria-label="pavocoin"
            indicator={<Plus />}
            title="Apa itu PavoCoin?"
            className="font-medium"
          >
            <p className="text-[#66676A] font-normal text-lg">
              Pavo Official adalah perusahaan teknologi berpikiran maju yang
              berdedikasi untuk memajukan aset digital dan industri blockchain.
              PavoCoin adalah produk andalan kami, yang dirancang untuk
              merevolusi cara orang terlibat dengan mata uang digital dan NFT
              (Non-Fungible Tokens).
            </p>
            <p className="mt-8 text-[#66676A] font-normal text-lg pb-3"></p>
          </AccordionItem>
          <AccordionItem
            key="market"
            aria-label="marketpavo"
            indicator={<Plus />}
            title="Apa itu Maketplace NFT Pavo"
            className="font-medium"
          >
            <p className="text-[#66676A] font-normal text-lg">
              Pasar NFT untuk PavoCoin di jaringan Solana. Proyek ini juga
              menggunakan nama koin PavoCoin untuk menjual dan membeli NFT di
              PavoCoin.
            </p>
            <p className="mt-8 text-[#66676A] font-normal text-lg pb-3"></p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
