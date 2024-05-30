/* eslint-disable react/prop-types */
const Footer = ({
  data: { noHP, alamat },
  title,
  color: { textColor, secondary },
}) => {
  return (
    <footer className={`p-4 ${secondary} md:p-8 lg:p-10  ${textColor}`}>
      <div className="mx-auto max-w-screen-xl text-center">
        <a
          href="#"
          className="flex justify-center items-center text-2xl font-semibold"
        >
          {title}
        </a>
        <p className="my-6 ">
          No Hp: {noHP} Alamat: {alamat}
        </p>
        <span className="text-sm  sm:text-center">
          © 2024
          <a
            href="https://mudapedia.my.id"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            didukung oleh Mudapedia™
          </a>
          . All Rights Reserved.
        </span>
        <a href="https://mudapedia.my.id" target="_blank" rel="noreferrer">
          <img
            src="/public/logo-muda-pedia.png"
            alt="mudapedia"
            className="w-16 m-auto mt-5"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
