/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Product = ({ product: { data }, color: { textColor, accentColor } }) => {
  return (
    <section
      className={`${textColor} pt-10 pb-20 max-w-screen-lg mx-auto px-5`}
    >
      <p className="text-center mb-4 text-3xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl ">
        Produk kami
      </p>
      <section className="gap-5 md:gap-10 lg:gap-20 mt-10 lg:mt-32 w-fit grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((v, i) => (
          <div
            key={i}
            className="max-w-sm border border-gray-200 rounded-lg shadow relative pb-10 break-words"
          >
            <a href="#">
              <div className="w-full h-48 rounded-lg" style={{
                background: `url(${v.img})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
              }}></div>
              
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {v.name}
                </h5>
              </a>
              {v.deskripsi ? (
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {v.deskripsi}
                </p>
              ) : (
                ""
              )}
              {v.price ? (
                <p
                  className={`mb-3 text-xl ${accentColor} font-bold absolute bottom-0`}
                >
                  {v.price}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Product;
