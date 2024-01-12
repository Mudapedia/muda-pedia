import { Helmet, HelmetProvider } from "react-helmet-async";
import CardItem from "../components/admin/CardItem";
import Jumbotron from "../components/admin/Jumbotron";

const Admin = () => {
  return (
    <HelmetProvider>
      <section>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <section>
          <Jumbotron />
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
      </section>
    </HelmetProvider>
  );
};

export default Admin;
