import { HelmetProvider, Helmet } from "react-helmet-async";
import dataMuiz from "./umkm/muiz";
import dataIqbal from "./umkm/iqbal";
import dataRamzi from "./umkm/ramzi";
import dataTaufan from "./umkm/taufan";
import dataWildan from "./umkm/wildan";
import dataHaikal from "./umkm/haikal";
import dataTri from "./umkm/tri";
import dataTest from "./umkm/test";
import { useState } from "react";

const CheckDomain = () => {
  const data = Object.assign({}, dataTest,dataTri,dataHaikal,dataWildan,dataTaufan, dataMuiz, dataRamzi, dataIqbal);
  const [domain, setDomain] = useState(Object.keys(data));

  const cari = (value) => {
    const key = Object.keys(data);
    setDomain([]);

    let i = 0;
    while (i < key.length) {
      const check = key[i].replaceAll("-", "");

      const pola = new RegExp(value, "i");
      if (pola.test(check)) {
        const domainName = key[i];
        setDomain((prev) => [...prev, domainName]);
      }

      i++;
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Check Domain</title>
      </Helmet>

      <section className="p-10">
        <section className="mt-20 max-w-screen-sm mx-auto">
          <form className=" mx-auto">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Cek nama domain..."
                required
                onChange={(e) => cari(e.target.value.replace(/[ -]/g, ""))}
              />
              <button
                type="submit"
                className="hidden text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <section>
            <ul className="bg-gray-50 border border-gray-300 rounded-md px-3">
              {domain.map((v, i) => (
                <li key={i} className="py-3 border-gray-300 border-b-1">
                  /{v}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </HelmetProvider>
  );
};

export default CheckDomain;
