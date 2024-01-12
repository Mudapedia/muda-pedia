import { Button } from "@nextui-org/react";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
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
  );
};

export default Home;
