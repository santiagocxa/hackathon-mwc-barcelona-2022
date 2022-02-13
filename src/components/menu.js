import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/menu.css';

const Menu = () => {
  return (
    <ul className='Menu'>
      <NavLink to='/'>
        <li className='Menu-option'>Home</li>
      </NavLink>
      <NavLink to='details'>
        <li className='Menu-option'>Details</li>
      </NavLink>
      <NavLink to='skill'>
        <li className='Menu-option'>Skill</li>
      </NavLink>
      <NavLink to='resume'>
        <li className='Menu-option'>Resumen</li>
      </NavLink>
    </ul>
  );
};

export default Menu;
