import React from 'react';
import { Outlet } from 'react-router-dom';
import '../assets/styles/cv.css';

const Cv = () => {
  return (
    <section className='Cv'>
      <Outlet />
    </section>
  );
};

export default Cv;
