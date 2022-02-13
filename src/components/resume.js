import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import '../assets/styles/resume.css';
import Context from '../context/context';
import TagSkill from './tagSkill';
const Resume = () => {
  const { users } = useContext(Context);
  const { id } = useParams();
  const user = users.find((user) => user.id == id);
  const {
    firstName,
    lastName,
    email,
    description,
    country,
    city,
    profile,
    experience,
    skill,
  } = user;

  return (
    <div className='Resume'>
      <h3 className='Resume-title'>Resume</h3>
      <section className='Resume-info'>
        <p>
          <strong>Name: </strong>
          {firstName} {lastName}
        </p>
        <p>
          <strong>Email: </strong>
          {email}
        </p>
        <p>
          <strong>Location: </strong>
          {city || ''} - {country || ''}
        </p>
        <p>
          <strong>About: </strong>
          {description || ''}
        </p>
      </section>
      <h4>Experience</h4>
      <section className='Resume-skill'>
        <p>
          <strong>Profile: </strong>
          {profile || ''}
        </p>
        <p>
          <strong>Experiencie: </strong>
          {experience || '0'} Years
        </p>
        <p>
          <strong>Skill:</strong>
        </p>
        <TagSkill skill={skill} />
      </section>
    </div>
  );
};

export default Resume;
