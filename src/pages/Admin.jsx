import { Helmet, HelmetProvider } from "react-helmet-async";
import AdminInit from "../components/admin/AdminInit";
import FormAdd from "../components/admin/FormAdd";
import { useState } from "react";

const Admin = () => {
  const [formAddShowHide, setFormAddShowHide] = useState("translate-x-full");

  return (
    <HelmetProvider>
      <section>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <section className="">
          <AdminInit
            setFormAddShowHide={setFormAddShowHide}
            formAddShowHide={formAddShowHide}
          />
          <FormAdd
            formAddShowHide={formAddShowHide}
            setFormAddShowHide={setFormAddShowHide}
          />
        </section>
      </section>
    </HelmetProvider>
  );
};

export default Admin;
