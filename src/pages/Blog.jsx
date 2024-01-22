import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import NavigationBar from '../components/user/Navbar';
import Title from '../components/user/blog/Title';
import CardSection from '../components/user/blog/CardSection';
import Footer from '../components/user/Footer';

const Blog = () => {

  return (
    <HelmetProvider>
      <section>
        <Helmet>
          <title>Blog Muda Pedia</title>
        </Helmet>
      </section>

      <section>
        <NavigationBar />
      </section>

      <section className='flex justify-between flex-col gap-16'>
        <Title />
        <CardSection />
      </section>
      <Footer />
    </HelmetProvider>
  );
};

export default Blog;