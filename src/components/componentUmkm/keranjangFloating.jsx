const KeranjangFloating = ({color: { primary,hoverColor }}) => {
  let array = new Array(20).fill(1);
  return(
    <section className="fixed top-0 left-0 z-[1000] w-[100vw] h-[100vh] flex items-start pt-5 justify-center">
      <div className="absolute top-0 left-0 bg-slate-600 w-full h-full opacity-45"></div>
      
      <div className="bg-white z-[999] w-[80vw] h-[80vh] rounded-lg relative">
        <div className="bg-red-500 absolute rounded-full -right-2 -top-2">
        <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/multiply.png" alt="multiply"/>
        </div>
        <h1 className="text-center text-xl font-semibold mt-2">Pesanan Anda</h1>

        {/* card wrapper */}
        <div className="bg-slate-400 w-full h-[55%] overflow-y-scroll">
          {array.map(()=>{
            return(
              <h1>test</h1>
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

      {/* floating btn keranjang */}
      <div className={`${primary} ${hoverColor} fixed  bottom-3 right-3 rounded-full p-5 cursor-pointer hidden`}>
        <img width="25" height="25" src="https://img.icons8.com/pastel-glyph/64/FFFFFF/shopping-basket-2--v1.png" alt="shopping-basket-2--v1"
        className=""/>
      </div>
    </section>
  )
}
export default KeranjangFloating;