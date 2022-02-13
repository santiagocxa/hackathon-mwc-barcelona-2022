import React, { useContext, useState } from 'react';
import Context from '../context/context';
import { useNavigate } from 'react-router-dom';
import ButtonSubmit from './buttonSubmit';

import '../assets/styles/signIn.css';

const SignIn = () => {
  const [dataUser, setDataUser] = useState({});
  const { addUser, loginUser, users } = useContext(Context);
  let generateID = users.length + 1;

  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setDataUser({
      ...dataUser,
      id: generateID,

      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(dataUser);
    loginUser(dataUser);
    navigate(`/profile/${dataUser.id}/details`);
  };

  return (
    <section className='SignIn'>
      <h3 className='SignIn-title'>Join Barcelona Digital Talent</h3>
      <form className='SignIn-form' onSubmit={handleSubmit}>
        <dl>
          <dd>
            <input
              type='hidden'
              name='firstName'
              value={generateID}
              onChange={handleOnChange}
            ></input>
          </dd>
        </dl>
        <dl>
          <dt>
            <label name='firstName'>First Name</label>
          </dt>
          <dd>
            <input
              onChange={handleOnChange}
              type='text'
              name='firstName'
            ></input>
          </dd>
        </dl>
        <dl>
          <dt>
            <label name='lastName'>Last Name</label>
          </dt>
          <dd>
            <input
              onChange={handleOnChange}
              type='text'
              name='lastName'
            ></input>
          </dd>
        </dl>
        <dl>
          <dt>
            <label name='email'>Email</label>
          </dt>
          <dd>
            <input
              onChange={handleOnChange}
              type='text'
              name='email'
            ></input>
          </dd>
        </dl>
        <dl>
          <dt>
            <label name='password'>Password</label>
          </dt>
          <dd>
            <input
              onChange={handleOnChange}
              type='password'
              name='password'
            ></input>
          </dd>
        </dl>
        <ButtonSubmit />
      </form>
    </section>
  );
};

export default SignIn;
