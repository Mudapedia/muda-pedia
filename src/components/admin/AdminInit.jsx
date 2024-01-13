import NavbarAdmin from "./NavbarAdmin";
import CardItem from "./CardItem.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Proptypes from "prop-types";

const AdminInit = ({ setFormAddShowHide, formAddShowHide }) => {
  return (
    <section>
      <NavbarAdmin />
      <Jumbotron
        setFormAddShowHide={setFormAddShowHide}
        formAddShowHide={formAddShowHide}
      />
      <section className="flex flex-wrap gap-14 justify-between px-14">
        <CardItem
          title={"hello world"}
          tanggal={Date.now().toString()}
          img={
            "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          }
        />
        <CardItem
          title={"hello world"}
          tanggal={Date.now().toString()}
          img={
            "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          }
        />
        <CardItem
          title={"hello world"}
          tanggal={Date.now().toString()}
          img={
            "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          }
        />
        <CardItem
          title={"hello world"}
          tanggal={Date.now().toString()}
          img={
            "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          }
        />
      </section>
    </section>
  );
};

export default AdminInit;

AdminInit.propTypes = {
  setFormAddShowHide: Proptypes.func,
  formAddShowHide: Proptypes.string,
};
