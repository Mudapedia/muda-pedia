/* eslint-disable react/prop-types */
import { useState } from "react";

const KeranjangFloating = ({ color: { primary, hoverColor } }) => {
  const [showHideKeranjang, setShowHideKeranjang] = useState("");
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  let array = new Array(20).fill(1);
  return(
    <section className="fixed top-0 left-0 z-[1000] w-[100vw] h-[100vh] flex items-start pt-5 justify-center hidden">
      <div>
        <div className="absolute top-0 left-0 bg-slate-600 w-full h-full opacity-45"></div>
        <div className="bg-white z-[999] w-[80vw] h-[80vh] rounded-lg relative">
          <div className="bg-red-500 absolute rounded-full -right-2 -top-2">
          <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png" alt="multiply"/>
          </div>
          <h1 className="text-center text-xl font-semibold mt-2">Pesanan Anda</h1>

          {/* card wrapper */}
          <div className="w-full h-[55%] overflow-y-scroll border-t-1 border-b-1 px-3">
            {array.map(()=>{
              return(
                <div className="flex border-b-1 mt-1 pb-1 w-full justify-between">
                  <div className="flex">
                  <img src="https://asset.kompas.com/crops/toOljW__-UqEVhGAJe8UyPdZWnU=/92x67:892x600/750x500/data/photo/2023/08/23/64e59deb79bfb.jpg" alt="product image"
                  className="w-10"/>
                  <div className="overflow-x-scroll w-[40vw] text-nowrap scrollbar-hide">
                    <p className="ml-3">Es TehEs TehEs TehEs TehEs TehEs TehEs TehEs TehEs TehEs TehEs Teh</p>
                  </div>
                  </div>
                  <div className="justify-self-end flex relative">
                    <div className="pt-1 px-2 border-1 rounded-tl-md rounded-bl-md"><i class="fa-solid fa-minus"></i></div>
                    <p className="mr-2 ml-3">10</p>
                    <div className="pt-1 px-2 border-1 rounded-tr-md rounded-br-md"><i className="fa-solid fa-plus text-sm"></i></div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="px-4">  
            {/* form */}
            <div>
              <p>Nama</p>
              <input type="text" className="border border-slate-500 rounded-md w-full" />
              <p>Deskripsi <span className="text-slate-500 text-sm">(optional)</span></p>
              <textarea type="text" className="border border-slate-500 rounded-md w-full" />
            </div>
            <div className="flex justify-center mt-4">
              <button className={`${primary} py-2 px-5 rounded-md text-white text-sm`}>Pesan</button>
            </div>
          </div>
        </div>
      </div>
      {/* floating btn keranjang */}
      <div className={`${primary} ${hoverColor} fixed  bottom-3 right-3 rounded-full p-5 cursor-pointer ${showHideKeranjang}`}>
        <div className="bg-red-500 flex justify-center align-center rounded-full m-0 absolute w-7 h-7 -top-1 -right-1">
        <p className="text-sm m-0 text-white">999</p>
        </div>
        <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/shopping-basket-2--v1.png" alt="shopping-basket-2--v1"
        className=""/>
      </div>
    </section>
  );
};
export default KeranjangFloating;
