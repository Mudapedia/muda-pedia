import { useParams } from "react-router-dom";
import Template1 from "./Template1";
import Template2 from "../umkmPremium/Template2";
import dataMuiz from "./muiz";
import dataIqbal from "./iqbal";
import dataRamzi from "./ramzi";
import dataTaufan from "./taufan" ;
import muizDataUmkmPremium from "../umkmPremium/muiz";
import dataTri from "./tri";
import dataHaikal from "./haikal";
import dataWildan from "./wildan";
import dataTest from "./test";
import dataFaqih from "./faqih";

const Umkm = () => {
  let { umkm } = useParams();
  const dataUmkm = Object.assign(
    {},
    dataTri,
    dataHaikal,
    dataWildan,
    dataTaufan ,
    dataMuiz,
    dataIqbal,
    dataRamzi,
    muizDataUmkmPremium,
    dataTest,
    dataFaqih
  );

  if (!dataUmkm[umkm]) {
    return (
      <section className="flex justify-center items-center h-[100vh] ">
        <section className="flex flex-col items-center gap-4">
          <section className="relative flex justify-center">
            <img src="/spongebob.gif" alt="notfound" />
            <h1 className="font-bold text-xl text-white absolute bottom-10 drop-shadow-md">
              Ga ada, Ga da
            </h1>
          </section>
          <h1 className="text-center font-bold text-xl">
            Halaman tidak ditemukan
          </h1>
          <a href="/" className="py-1 px-4 bg-blue-500 text-white rounded-md ">
            Kembali
          </a>
        </section>
      </section>
    );
  }

  if (dataUmkm[umkm].statusPremium) {
    return <Template2 data={dataUmkm[umkm]} />;
  }

  return <Template1 data={dataUmkm[umkm]} />;
};

export default Umkm;
