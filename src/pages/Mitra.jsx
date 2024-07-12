import { useState } from "react";
import dataIqbal from "./umkm/iqbal";
import dataMuiz from "./umkm/muiz";
import dataRamzi from "./umkm/ramzi";
import dataTest from "./umkm/test";
import dataHaikal from "./umkm/haikal";
import dataWildan from "./umkm/wildan";
import dataTaufan from "./umkm/taufan";
import dataTri from "./umkm/tri";
import { Link } from "react-router-dom";
import { Input } from "@nextui-org/react";

const Mitra = () => {
  const data = Object.assign({}, dataTest, dataTri, dataHaikal, dataWildan, dataTaufan, dataMuiz, dataRamzi, dataIqbal);

  const [keys, setKeys] = useState(Object.keys(data));
  const keysOri = Object.keys(data);

  const cari = (value) => {
    setKeys([]);

    let i = 0;
    while (i < keysOri.length) {
      const check = keysOri[i].replaceAll("-", "");

      const pola = new RegExp(value, "i");
      if (pola.test(check)) {
        const l = keysOri[i];
        setKeys((prev) => [...prev, l]);
      }
      i++;
    }
  };

  return (
    <section className="flex w-full flex-col gap-16 py-8 mx-auto max-w-screen-xl lg:px-0 px-6">
      <section className="bg-white dark:bg-gray-900 max-w-screen-sm mx-auto">
        <section className="text-center flex flex-col items-center gap-5">
          <div className="flex flex-col gap-1 items-center w-full">
            <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white">
              Mitra Kami
            </h1>
            <p className="text-sm font-normal  text-gray-500">
              Kami bekerja sama dengan UMKM dalam pembuatan website untuk membantu
              mereka memperluas jangkauan pasar dan meningkatkan visibilitas
              online
            </p>
          </div>
          <Link to="/" className="py-1 px-4 bg-blue-500 text-white rounded-md text-xs fixed bottom-5 right-5">
            kembali
          </Link>
          <input
            type="search"
            id="default-search"
            className="block w-full text-sm p-2 focus:outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-lg m-auto"
            placeholder="Cari mitra kami..."
            required
            onChange={(e) => cari(e.target.value)}
          />
        </section>
      </section>

      <section className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5 w-full ">
        {keys.length === 0 ? (
          'No items....'
        ) : (
          keys.map((v, i) => {
            return (
              <div
                key={i}
                className="bg-white border flex flex-col gap-2 border-gray-200 rounded-md shadow dark:bg-gray-800 dark:border-gray-700 w-full p-3"
              >
                <div className={`w-full h-36 rounded-md `} style={{
                  background: `url('${data[v].hero.img}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                </div>
                <div className="w-full flex flex-col gap-3 justify-between items-start">
                  <div className="flex flex-col gap-0 w-full h-fit">
                    <a href="#">
                      <h5 className=" font-semibold tracking-tight text-gray-900 dark:text-white">
                        {data[v].title}
                      </h5>
                    </a>
                    <p className="font-light text-gray-700 dark:text-gray-400 text-xs italic">
                      {String(data[v].hero.deskripsi).slice(0, 50) + '....'}
                    </p>
                  </div>
                  <a
                    href={`/${v}`}
                    className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kunjungi
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>

                </div>
              </div>
            )
          })
        )}
      </section>
    </section>
  );
};

export default Mitra;
