import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/menu';

import '../assets/styles/profile.css';
const Profile = () => {
  return (
    <section className='Profile'>
      <div className='Profile-menu'>
        <Menu />
      </div>
      <div className='Profile-details'>
        <Outlet />
      </div>
    </section>
  );
};

export default Profile;
