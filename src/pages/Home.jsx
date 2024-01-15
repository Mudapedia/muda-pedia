import { Button } from "@nextui-org/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = () => {
  return (
    <HelmetProvider>
      <section>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <section>
          <section>
            <h1>ini halaman home</h1>
            <Button color="primary">Button</Button>
          </section>
        </section>
      </section>
    </HelmetProvider>
  );
};

export default Home;
