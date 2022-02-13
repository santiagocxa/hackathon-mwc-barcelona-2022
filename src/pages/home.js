import React, { useContext } from 'react';
import Context from '../context/context';
import ColorRandom from '../assets/utils/colorRandom';
import { Link } from 'react-router-dom';
import '../assets/styles/home.css';

const Home = () => {
  const { users } = useContext(Context);
  users.sort(function (a, b) {
    return b.id - a.id;
  });

  return (
    <div className='Home'>
      <h3 className='Home-title'>Talent Panel</h3>
      <section className='Home-section'>
        {users.map((item) => {
          const color = ColorRandom();
          return (
            <Link
              className='Home-item'
              key={item.id}
              to={`/profile/${item.id}/resume`}
            >
              <div className='Home-talent'>
                <img
                  className='Home-talent-img'
                  src={
                    item.avatar
                      ? item.avatar
                      : `https://ui-avatars.com/api/?name=${item.firstName}+${item.lastName}&background=${color}&color=fff&size=200`
                  }
                  alt='profile'
                />
                <div className='Home-talent-description'>
                  <p>{`Name: ${item.firstName} ${item.lastName}`}</p>
                  <p>{`Profile: ${item.profile}`}</p>
                  <p>{`Country: ${item.country}`}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Home;
