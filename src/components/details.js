import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/context';
import '../assets/styles/details.css';
import ButtonSubmit from './buttonSubmit';

const Details = () => {
  const { id } = useParams();
  const { users, addDetails } = useContext(Context);
  const user = users.find((user) => user.id == id);
  const [stateUser, setStateUser] = useState(user);

  console.log(`usesr `, stateUser);

  useEffect(() => {
    setStateUser({
      ...stateUser,
    });
  }, []);

  const handleOnChange = (event) => {
    setStateUser({
      ...stateUser,
      [event.target.name]: event.target.value,
    });
    console.log(stateUser);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addDetails(stateUser);
  };

  return (
    <section className='Details'>
      <h3 className='Details-title'>Details</h3>
      <div>
        <p className='Details-item'>
          <strong>
            Name: <br />
          </strong>
          {` ${stateUser.firstName} ${stateUser.lastName}`}
        </p>
        <p className='Details-item'>
          <strong>
            Email:
            <br />
          </strong>
          {` ${stateUser.email}`}
        </p>
      </div>
      <form className='Details-form' onSubmit={handleSubmit}>
        <dl>
          <dt>
            <label name='country'>Country</label>
          </dt>
          <dd>
            <input
              className='Skill-form-input'
              onChange={handleOnChange}
              type='text'
              name='country'
              value={stateUser.country || ''}
            ></input>
          </dd>
        </dl>
        <dl>
          <dt>
            <label name='city'>City</label>
          </dt>
          <dd>
            <input
              className='Skill-form-input'
              onChange={handleOnChange}
              type='text'
              name='city'
              value={stateUser.city || ''}
            ></input>
          </dd>
        </dl>
        <dl>
          <dt>
            <label name='description'>About</label>
          </dt>
          <dd>
            <textarea
              className='Skill-form-input text-area'
              onChange={handleOnChange}
              name='description'
              value={stateUser.description || ''}
            ></textarea>
          </dd>
        </dl>
        <ButtonSubmit />
      </form>
    </section>
  );
};

export default Details;
