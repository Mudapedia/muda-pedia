/* eslint-disable react/prop-types */
import { useState } from "react";

const KeranjangFloating = ({ color: { primary, hoverColor } }) => {
  const [showHideKeranjang, setShowHideKeranjang] = useState("");
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  let array = new Array(20).fill(1);

  const btnPesan = (e) => {
    e.preventDefault();

    alert(`nama: ${nama}\ndeskripsi: ${deskripsi}`);
  };

  return (
    <section className="fixed top-0 left-0 z-[1000] w-[100vw] h-[100vh] flex items-start pt-5 justify-center">
      <div className={`${showHideKeranjang ? "" : "hidden"}`}>
        <div
          className="absolute top-0 left-0 bg-slate-600 w-full h-full opacity-45 cursor-pointer"
          onClick={() => setShowHideKeranjang("")}
        ></div>

        <div className="bg-white z-[999] w-[80vw] h-[80vh] rounded-lg relative">
          <div className="bg-red-500 absolute rounded-full -right-2 -top-2">
            <img
              width="25"
              height="25"
              src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png"
              alt="multiply"
              onClick={() => setShowHideKeranjang("")}
              className="cursor-pointer"
            />
          </div>
          <h1 className="text-center text-xl font-semibold mt-2">
            Pesanan Anda
          </h1>

          {/* card wrapper */}
          <div className="bg-slate-400 w-full h-[55%] overflow-y-scroll">
            {array.map((v, i) => {
              return <h1 key={i}>test</h1>;
            })}
          </div>

          <form className="px-4" onSubmit={btnPesan}>
            {/* form */}
            <div>
              <label htmlFor="nama">Nama</label>
              <input
                id="nama"
                type="text"
                className="border border-slate-500 rounded-md w-full"
                onChange={(e) => setNama(e.target.value)}
              />
              <label htmlFor="deskripsi">
                Deskripsi{" "}
                <span className="text-slate-500 text-sm">(optional)</span>
              </label>
              <textarea
                id="deskripsi"
                type="text"
                className="border border-slate-500 rounded-md w-full"
                onChange={(e) => setDeskripsi(e.target.value)}
              />
            </div>
            <div className="flex justify-center mt-4">
              <button
                className={`${primary} py-2 px-5 rounded-md text-white text-sm`}
              >
                Pesan
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* floating btn keranjang */}
      <div
        className={`${primary} ${hoverColor} fixed  bottom-3 right-3 rounded-full p-5 cursor-pointer ${showHideKeranjang}`}
        onClick={() => setShowHideKeranjang("hidden")}
      >
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/pastel-glyph/64/FFFFFF/shopping-basket-2--v1.png"
          alt="shopping-basket-2--v1"
          className=""
        />
      </div>
    </section>
  );
};
export default KeranjangFloating;
