import { useState } from "react";
import dataIqbal from "./umkm/iqbal";
import dataMuiz from "./umkm/muiz";
import dataRamzi from "./umkm/ramzi";
import { Link } from "react-router-dom";

const Mitra = () => {
  const data = Object.assign({}, dataIqbal, dataMuiz, dataRamzi);

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
    <section>
      <section className="bg-white dark:bg-gray-900">
        <section className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Mitra Kami
          </h1>
          <p className="mb-3 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
            Kami bekerja sama dengan UMKM dalam pembuatan website untuk membantu
            mereka memperluas jangkauan pasar dan meningkatkan visibilitas
            online
          </p>
          <Link to="/" className="py-1 px-4 bg-blue-500 text-white rounded-md">
            kembali
          </Link>
          <input
            type="search"
            id="default-search"
            className="mt-8 block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 max-w-lg m-auto"
            placeholder="Cari"
            required
            onChange={(e) => cari(e.target.value)}
          />
        </section>
      </section>

      <section className="flex flex-wrap p-10 gap-5 justify-between items-center">
        {keys.map((v, i) => (
          <div
            key={i}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <img className="rounded-t-lg" src={data[v].hero.img} alt="#  " />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {data[v].title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data[v].hero.deskripsi}
              </p>
              <a
                href={`/${v}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
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
        ))}
      </section>
    </section>
  );
};

export default Mitra;
