import React, { useContext } from 'react';
import User from './user';
import { Link } from 'react-router-dom';
import Context from '../context/context';

import '../assets/styles/header.css';

const Header = () => {
  const { login } = useContext(Context);
  return (
    <div className='Header'>
      <Link to='/'>
        <img
          className='Header-image'
          src='https://barcelonadigitaltalent.com/app/uploads/sites/3/2020/02/BDT-1.1-POSITIU_2-01.jpg'
          alt='Logo'
        />
      </Link>
      {login ? (
        <User user={login} />
      ) : (
        <Link to='/signin'>
          <button>Sign In</button>
        </Link>
      )}
    </div>
  );
};

export default Header;
