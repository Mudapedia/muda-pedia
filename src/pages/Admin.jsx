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
  const [loadingContents, setLoadingContents] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  const getAllContent = async () => {
    try {
      setLoadingContents(true);
      const res = await Content.All();
      setContents(res.data);
      setLoadingContents(false);
      if (res.data.length === 0) {
        setIsEmpty(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(function () {
    getAllContent();
  }, []);

  return (
    <HelmetProvider>
      <section id="admin-top">
        <Helmet>
          <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
          <title>Dashboard</title>
        </Helmet>
        <section className="">
          <AdminInit
            setFormAddShowHide={setFormAddShowHide}
            contents={contents}
            setContents={setContents}
            setFormUpdateShowHide={setFormUpdateShowHide}
            setDataUpdate={setDataUpdate}
            loadingContents={loadingContents}
            setLoadingContents={setLoadingContents}
            isEmpty={isEmpty}
            setIsEmpty={setIsEmpty}
          />
          <FormAdd
            formAddShowHide={formAddShowHide}
            setFormAddShowHide={setFormAddShowHide}
            setContents={setContents}
            setIsEmpty={setIsEmpty}
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
