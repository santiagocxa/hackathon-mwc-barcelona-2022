import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../context/context';
import '../assets/styles/skill.css';
import TagSkill from './tagSkill';
import ButtonSubmit from './buttonSubmit';

const Skill = () => {
  const [tag, setTag] = useState([]);
  const [skill, setSkill] = useState([]);
  const { id } = useParams();
  const [userSkills, setUserSkills] = useState();
  const { addSkills } = useContext(Context);

  const handleOnChangeTag = (event) => {
    setTag({
      ...tag,
      id: skill.length + 1,
      name: event.target.value,
    });
  };

  const handleOnClickTag = (event) => {
    event.preventDefault();
    setSkill([...skill, { ...tag }]);
    document.getElementById('skill').value = '';
  };

  const handleOnChange = (event) => {
    setUserSkills({
      ...userSkills,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(
    () =>
      setUserSkills({
        ...userSkills,
        skill,
        id: id,
      }),
    [skill]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserSkills({
      ...userSkills,
      skill,
      id: id,
    });
    addSkills(userSkills);
  };

  useEffect(() => console.log(`user:`, userSkills), [userSkills]);
  return (
    <section className='Skill'>
      <h3 className='Skill-title'>Skill</h3>
      <form className='Skill-form' onSubmit={handleSubmit}>
        <dl>
          <dt>
            <label name='profile'>Sector</label>
          </dt>
          <dd>
            <select
              className='Skill-form-input'
              name='profile'
              onChange={handleOnChange}
            >
              <option value='frontEnd'>FrontEnd</option>
              <option value='backEnd'>BackEnd</option>
              <option value='dataScience'>Data Science</option>
            </select>
          </dd>
        </dl>
        <dl>
          <dt>
            <label name='experience'>Years of experience</label>
          </dt>
          <dd>
            <input
              className='Skill-form-input'
              onChange={handleOnChange}
              type='text'
              name='experience'
            ></input>
          </dd>
        </dl>
        <dl>
          <dt>
            <label name='skill'>Skill</label>
          </dt>
          <dd>
            <div className='Skill-form-tag'>
              <input
                className='Skill-form-input tag-input'
                onChange={handleOnChangeTag}
                type='text'
                name='skill'
                id='skill'
              ></input>
              <button
                className='Skill-form-tag-button'
                onClick={handleOnClickTag}
              >
                +
              </button>
            </div>
            <TagSkill skill={skill || null} />
          </dd>
        </dl>
        <ButtonSubmit />
      </form>
    </section>
  );
};

export default Skill;
