import { Helmet, HelmetProvider } from "react-helmet-async";
import AdminInit from "../components/admin/AdminInit";
import FormAdd from "../components/admin/FormAdd";
import { useState, useEffect } from "react";
import Content from "../api/content";
import FormUpdate from "../components/admin/FormUpdate";

const Admin = () => {
  const [formAddShowHide, setFormAddShowHide] = useState("translate-x-full");
  const [formUpdateShowHide, setFormUpdateShowHide] =
    useState("-translate-x-full");
  const [dataUpdate, setDataUpdate] = useState({});

  const [contents, setContents] = useState([]);

  useEffect(function () {
    Content.All().then((res) => setContents(res.data));
  }, []);

  return (
    <HelmetProvider>
      <section>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <section className="">
          <AdminInit
            setFormAddShowHide={setFormAddShowHide}
            contents={contents}
            setContents={setContents}
            setFormUpdateShowHide={setFormUpdateShowHide}
            setDataUpdate={setDataUpdate}
          />
          <FormAdd
            formAddShowHide={formAddShowHide}
            setFormAddShowHide={setFormAddShowHide}
            setContents={setContents}
          />
          <FormUpdate
            formUpdateShowHide={formUpdateShowHide}
            setFormUpdateShowHide={setFormUpdateShowHide}
            dataUpdate={dataUpdate}
            setDataUpdate={setDataUpdate}
            setContents={setContents}
          />
        </section>
      </section>
    </HelmetProvider>
  );
};

export default Admin;
