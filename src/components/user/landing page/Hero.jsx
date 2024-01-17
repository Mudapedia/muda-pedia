import { Button,Link,Image } from "@nextui-org/react";
import heroImg1 from "../../../assets/images/hero-img1.png";
import heroImg2 from "../../../assets/images/hero-img2.png";

const Hero = () => {
  return (
    <section className="grid sm:grid-cols-2 gap-5 max-w-screen-lg mx-auto py-5 lg:py-8 px-6 lg:px-0">
      <div className="flex flex-col gap-5 lg:gap-9">
        <h1 className="text-[#091232] text-4xl lg:text-[52px] font-medium lg:leading-[78px]">We Launch, Refine and Redefine Your Brand Through Creative Innovation.</h1>
        <h2 className="text-[#66676A] text-lg lg:leading-9 font-normal">
          Menjawab permasalahan, menemukan ide serta menciptakan solusi, MudaPedia membantu untuk membangun dan meluncurkan bisnis anda
        </h2>
        <div className="">
          <Button
          as={Link}
          size="lg"
          href="#"
          variant="flat"
          className="bg-[#4F5CDF] text-slate-50 rounded-full"
          >Layanan Kami</Button>
        </div>
      </div>
      <div className="relative hidden sm:block">
        <div className="absolute bottom-0 left-0">
          <Image src={ heroImg1 } className="max-w-[160px] lg:max-w-[241px]"/>
        </div>
        <div className="absolute top-0 right-0">
          <Image src={ heroImg2 } className="max-w-[160px] lg:max-w-[241px]"/>
        </div>
      </div>
    </section>
  );
};
export default Hero;
