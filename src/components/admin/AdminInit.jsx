import NavbarAdmin from "./NavbarAdmin";
import CardItem from "./CardItem.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Proptypes from "prop-types";
import { useState } from "react";
import Confirm from "./Confirm.jsx";
import CardLoading from "./CardLoading.jsx";

const AdminInit = ({
  setFormAddShowHide,
  contents,
  setContents,
  setFormUpdateShowHide,
  setDataUpdate,
}) => {
  const [idDelete, setIdDelete] = useState("");
  const [showHideConfirm, setShowHideConfirm] = useState(false);

  const btnDelete = (id) => {
    setIdDelete(id);
    setShowHideConfirm(true);
  };

  return (
    <section>
      {showHideConfirm ? (
        <Confirm
          setShowHideConfirm={setShowHideConfirm}
          id={idDelete}
          setContents={setContents}
        />
      ) : (
        ""
      )}
      <NavbarAdmin />
      <Jumbotron setFormAddShowHide={setFormAddShowHide} />
      <section className="flex flex-wrap gap-14 justify-between px-14">
        {contents.length === 0 ? <CardLoading count={6} /> : ""}
        {contents.map((content, i) => (
          <CardItem
            key={i}
            title={content.title}
            tanggal={content["created_at"]}
            img={content.thumbnail}
            callbackDelete={() => btnDelete(content._id)}
            callbackUpdate={() => {
              setFormUpdateShowHide("");
              setDataUpdate(content);
            }}
          />
        ))}
      </section>
    </section>
  );
};

export default AdminInit;

AdminInit.propTypes = {
  setFormAddShowHide: Proptypes.func,
  setFormUpdateShowHide: Proptypes.func,
  contents: Proptypes.array,
  setContents: Proptypes.func,
  setDataUpdate: Proptypes.func,
};
