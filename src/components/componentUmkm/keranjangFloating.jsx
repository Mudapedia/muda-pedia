/* eslint-disable react/prop-types */
import { useState } from "react";

const KeranjangFloating = ({
  color: { primary, hoverColor },
  barang,
  setBarang,
  totalBarang,
  setTotalBarang,
  totalHarga,
  setTotalHarga,
}) => {
  const [showHideKeranjang, setShowHideKeranjang] = useState("");
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const btnPesan = (e) => {
    e.preventDefault();

    alert(`nama: ${nama}\ndeskripsi: ${deskripsi}`);
  };

  const kurangiBarang = (index, price) => {
    const dataBaru = [...barang];
    dataBaru[index].count -= 1;

    if (dataBaru[index].count === 0) {
      dataBaru.splice(index, 1);
    }

    setTotalBarang(totalBarang - 1);
    setBarang(dataBaru);
    setTotalHarga(totalHarga - price);
  };

  const tambahBarang = (index, price) => {
    const dataBaru = [...barang];
    dataBaru[index].count += 1;

    setTotalBarang(totalBarang + 1);
    setBarang(dataBaru);
    setTotalHarga(totalHarga + price);
  };

  return (
    <>
      <section
        className={`${
          showHideKeranjang ? "" : "hidden"
        } fixed top-0 left-0 z-[1000] w-[100vw] h-[100vh] flex items-start pt-5 justify-center`}
      >
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
              className="cursor-pointer"
              onClick={() => setShowHideKeranjang("")}
            />
          </div>
          <h1 className="text-center text-xl font-semibold mt-2">
            Pesanan Anda; total harga:{" "}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(totalHarga)}
          </h1>

          {/* card wrapper */}
          <div className="w-full h-[55%] overflow-y-scroll border-t-1 border-b-1 px-3">
            {barang.map((v, i) => {
              return (
                <div
                  key={i}
                  className="flex border-b-1 mt-1 pb-1 w-full justify-between"
                >
                  <div className="flex">
                    <img src={v.img} alt="product image" className="w-10" />
                    <div className="overflow-x-scroll w-[40vw] text-nowrap scrollbar-hide">
                      <p className="ml-3">{v.name}</p>
                    </div>
                  </div>
                  <div className="justify-self-end flex relative">
                    <div className="pt-1 px-2 border-1 rounded-tl-md rounded-bl-md">
                      <i
                        className="fa-solid fa-minus cursor-pointer"
                        onClick={() => kurangiBarang(i, v.price)}
                      ></i>
                    </div>
                    <p className="mr-2 ml-3">{v.count}</p>
                    <div className="pt-1 px-2 border-1 rounded-tr-md rounded-br-md">
                      <i
                        className="fa-solid fa-plus text-sm cursor-pointer"
                        onClick={() => tambahBarang(i, v.price)}
                      ></i>
                    </div>
                  </div>
                </div>
              );
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
        {/* floating btn keranjang */}
      </section>
      <div
        className={`${primary} ${hoverColor} fixed  bottom-3 right-3 rounded-full p-5 cursor-pointer ${showHideKeranjang}`}
        onClick={() => setShowHideKeranjang("hidden")}
      >
        <div className="bg-red-500 flex justify-center align-center rounded-full m-0 absolute w-7 h-7 -top-1 -right-1">
          <p className="text-sm m-0 text-white">{totalBarang}</p>
        </div>
        <img
          width="25"
          height="25"
          src="https://img.icons8.com/pastel-glyph/64/FFFFFF/shopping-basket-2--v1.png"
          alt="shopping-basket-2--v1"
        />
      </div>
    </>
  );
};

export default KeranjangFloating;
