import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/user.css';
import ColorRandom from '../assets/utils/colorRandom';

const User = ({ user }) => {
  const color = ColorRandom();
  return (
    <Link to={`/profile/${user.id}`}>
      <div className='User'>
        <h4 className='User-title'>{user.firstName}</h4>
        <img
          className='User-image'
          src={`https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=${color}&color=fff&size=200`}
          alt='profile'
        />
      </div>
    </Link>
  );
};

export default User;
