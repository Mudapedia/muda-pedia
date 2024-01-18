import React from 'react';
import { Button } from '@nextui-org/react';

const Blog = () => {
  return (
    <section>
      {/* left content */}
      <div>
        <h2>Blog Kami</h2>
        <h1>Tulisan Terbaru</h1>
        <p>Mulai Eksplor dan temukan tips, insight dan inspirasi menarik</p>
        <Button>Semua Blog</Button>
      </div>

      {/* right content */}
      <div> {/* wrapper */}
        <h2>Judul Blog 1</h2>
        <h3>22 Januari 2023</h3>
        <p>Tim kami menawarkan solusi inovatif untuk membantu Anda mencapai tujuan bisnis Anda dalam era digital yang terus berkembang.</p>
        
      </div>

    </section>
  );
};

export default Blog;