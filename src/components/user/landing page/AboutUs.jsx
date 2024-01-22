import image from "../../../assets/5395108.jpg"

const AboutUs = () => {
    return(
        <section id="aboutUs" className="bg-[#F5F5F5] sm:grid sm:grid-cols-2 max-w-screen-lg mx-auto gap-9 p-9 rounded-lg scroll-mt-[8vh]" >
            <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-medium  text-[#091232]">
                    Ayo Kembangkan Bisnismu Bersama kami!
                </h1>
                <h2
                className="text-lg sm:text-xl text-[#66676A] font-medium"
                >
                    Muda Pedia solusi terpercaya
                </h2>
                <div className="rounded-lg p-2 sm:p-5 flex flex-col sm:flex-row gap-5 justify-between place-items-center sm:bg-white overflow-hidden">
                    <div className="bg-white flex w-full sm:block sm:gap-0 sm:p-0 p-5 rounded-lg gap-10">
                        <p className="text-[#091232] font-semibold text-2xl sm:text-[18px] md:text-2xl">
                            1+
                        </p>
                        <p className="text-[#66676A] sm:text-[11px] md:text-base">
                            Tahun Pengalaman
                        </p>
                    </div>
                    <div className="bg-white flex w-full sm:block sm:gap-0 sm:p-0 p-5 rounded-lg gap-5">
                        <p className="text-[#091232] font-semibold text-2xl sm:text-[18px] md:text-2xl">
                            50+
                        </p>
                        <p className="text-[#66676A] sm:text-[11px] md:text-base">
                            Proyek Terselesaikan
                        </p>
                    </div>
                    <div className="bg-white flex w-full sm:block sm:gap-0 sm:p-0 p-5 rounded-lg gap-5">
                        <p className="text-[#091232] font-semibold text-2xl sm:text-[18px] md:text-2xl">
                            92%
                        </p>
                        <p className="text-[#66676A] sm:text-[11px] md:text-base">
                            Kepuasan Pelanggan
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-[#66676A] flex flex-col gap-5">
                <p>Kami, di Mudapedia, memahami bahwa era digital telah membuka pintu menuju peluang yang tak terbatas, dan kami hadir sebagai solusi yang cerdas dan terpercaya untuk membantu Anda mengembangkan bisnis dalam dunia yang terus berubah. Sebagai perusahaan inovatif, kami menawarkan rangkaian layanan yang dirancang khusus untuk memenuhi kebutuhan bisnis modern.</p>
                <p>Visi kami menjadi Perusahaan Digital Agency yang terdepan dalam membantu para pebisnis mengembangkan usahanya</p>
            </div>
        </section>
    )
}
export default AboutUs