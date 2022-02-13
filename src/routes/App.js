import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import SignIn from '../components/signIn';
import Header from '../components/header';
import Home from '../pages/home';
import Profile from '../pages/profile';
import Details from '../components/details';
import Skill from '../components/skill';
import Resume from '../components/resume';
import Cv from '../components/cv';

const App = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/profile/:id/' element={<Profile />}>
          <Route path='details' element={<Details />} />
          <Route path='skill' element={<Skill />} />
          <Route path='resume' element={<Resume />} />
        </Route>
        <Route path='/profile/cv' element={<Cv />}>
          <Route path=':id' element={<Resume />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
