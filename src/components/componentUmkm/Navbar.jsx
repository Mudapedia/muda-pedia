/* eslint-disable react/prop-types */

const Navbar = ({
  navbarTitle,
  ctaLink,
  btnColor,
  btnHoverColor,
  btnTextColor,
  navbarBgColor,
  icon,
  title,
}) => {
  return (
    <nav
      className={`${navbarBgColor} fixed w-full z-20 top-0 start-0 border-b border-gray-200`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="tel:6282142515874"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          {icon ? <img src={icon} className="h-8 w-8" alt={title} /> : ""}

          <span className="self-center lg:text-2xl font-bold whitespace-nowrap dark:text-white">
            {navbarTitle}
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a
            href={ctaLink ? ctaLink : "#"}
            rel="noreferrer"
            target={ctaLink ? "_blank" : "_self"}
            type="button"
            className={`${btnTextColor} ${btnColor} ${btnHoverColor} font-medium rounded-lg text-sm px-4 py-2 text-center   `}
          >
            Kontak Kami
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
