import { Button } from "@nextui-org/react";
import heroImg from "../../../assets/hero-img.svg";

const Hero = () => {
    return(
        <section className="px-6 py-4 grid sm:grid-cols-2 md:px-9 lg:px-16 xl:px-28">
            <div>
                <h1
                className="text-6xl font-semibold"
                >Upgrade Your Business</h1>
                <h1
                className="text-2xl my-3"
                >We Provide The Best Value For Your Business</h1>
                <div className="my-6">
                <Button color="primary" className="mr-6">Contact Us</Button>
                <Button color="warning" className="text-white">Our Features</Button>
                </div>
            </div>
            <div className="grid place-content-center sm:place-content-end">
                <img src={ heroImg } alt="hero img" className="max-w-72" />
            </div>
        </section>


        
    )
}
export default Hero;
