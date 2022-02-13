import React, { useReducer } from 'react';
import {
  ADD_USER,
  LOGIN,
  ADD_DETAILS,
  ADD_SKILLS,
} from '../assets/utils/type';
import Context from './context';
import Reducer from './reducer';

const UserState = (props) => {
  const initialState = {
    login: null,
    users: [
      {
        id: 5,
        firstName: 'Paula',
        lastName: 'Gomez',
        email: 'pgomez@personal.com',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt pretium convallis. Quisque ultricies non nisi dapibus gravida. Duis auctor ante eget ligula condimentum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        country: 'Colombia',
        city: 'Medellin',
        avatar: '',
        profile: 'FrontEnd',
        experience: '4',
        skill: [
          {
            id: 1,
            name: 'HTML',
          },
          {
            id: 2,
            name: 'JAVASCRIPT',
          },
          {
            id: 3,
            name: 'CSS',
          },
          {
            id: 4,
            name: 'ANGULAR',
          },
          {
            id: 5,
            name: 'REACT.JS',
          },
          {
            id: 6,
            name: 'REDUX',
          },
          {
            id: 7,
            name: 'WEBPACK',
          },
        ],
      },
      {
        id: 3,
        firstName: 'Marco',
        lastName: 'Coper',
        email: 'mcoper@personal.com',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt pretium convallis. Quisque ultricies non nisi dapibus gravida. Duis auctor ante eget ligula condimentum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        country: 'Argentina',
        city: 'Mar de plata',
        avatar: '',
        profile: 'BackEnd',
        experience: '2',
        skill: [
          {
            id: 1,
            name: 'NODE.JS',
          },
          {
            id: 2,
            name: 'JAVASCRIPT',
          },
          {
            id: 3,
            name: 'PYTHON',
          },
          {
            id: 4,
            name: 'RUBY',
          },
          {
            id: 5,
            name: 'EXPRESS',
          },
          {
            id: 6,
            name: 'MONGODB',
          },
          {
            id: 7,
            name: 'AWS',
          },
        ],
      },
      {
        id: 4,
        firstName: 'Vanessa',
        lastName: 'Joes',
        email: 'vjoes@personal.com',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt pretium convallis. Quisque ultricies non nisi dapibus gravida. Duis auctor ante eget ligula condimentum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        country: 'España',
        city: 'Madrid',
        avatar: '',
        profile: 'Data Science',
        experience: '3',
        skill: [
          {
            id: 1,
            name: 'NODE.JS',
          },
          {
            id: 2,
            name: 'JAVASCRIPT',
          },
          {
            id: 3,
            name: 'PYTHON',
          },
          {
            id: 4,
            name: 'SQL',
          },
          {
            id: 5,
            name: 'ENGLISH',
          },
          {
            id: 6,
            name: 'CLOUD',
          },
          {
            id: 7,
            name: 'AWS',
          },
        ],
      },
      {
        id: 2,
        firstName: 'Martin',
        lastName: 'Forlan',
        email: 'mforlan@personal.com',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt pretium convallis. Quisque ultricies non nisi dapibus gravida. Duis auctor ante eget ligula condimentum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        country: 'Colombia',
        city: 'Medellin',
        avatar: '',
        profile: 'FrontEnd',
        experience: '2',
        skill: [
          {
            id: 1,
            name: 'HTML',
          },
          {
            id: 2,
            name: 'JAVASCRIPT',
          },
          {
            id: 3,
            name: 'CSS',
          },
          {
            id: 4,
            name: 'ANGULAR',
          },
          {
            id: 5,
            name: 'REACT.JS',
          },
          {
            id: 6,
            name: 'REDUX',
          },
          {
            id: 7,
            name: 'WEBPACK',
          },
        ],
      },
      {
        id: 1,
        firstName: 'Susana',
        lastName: 'Cadavid',
        email: 'scadavid@personal.com',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt pretium convallis. Quisque ultricies non nisi dapibus gravida. Duis auctor ante eget ligula condimentum luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
        country: 'Colombia',
        city: 'Medellin',
        avatar: '',
        profile: 'Data Science',
        experience: '2',
        skill: [
          {
            id: 1,
            name: 'NODE.JS',
          },
          {
            id: 2,
            name: 'JAVASCRIPT',
          },
          {
            id: 3,
            name: 'PYTHON',
          },
          {
            id: 4,
            name: 'SQL',
          },
          {
            id: 5,
            name: 'ENGLISH',
          },
          {
            id: 6,
            name: 'CLOUD',
          },
          {
            id: 7,
            name: 'AWS',
          },
        ],
      },
    ],
  };

  const [state, dispatch] = useReducer(Reducer, initialState);

  const addUser = (data) => {
    dispatch({ type: ADD_USER, payload: data });
  };

  const loginUser = (data) => {
    dispatch({ type: LOGIN, payload: data });
  };

  const addDetails = (data) => {
    dispatch({ type: ADD_DETAILS, payload: data });
  };

  const addSkills = (data) => {
    dispatch({ type: ADD_SKILLS, payload: data });
  };

  return (
    <Context.Provider
      value={{
        users: state.users,
        login: state.login,
        addUser,
        loginUser,
        addDetails,
        addSkills,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default UserState;
