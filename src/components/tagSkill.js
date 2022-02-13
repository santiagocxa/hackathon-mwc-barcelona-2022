import React from 'react';
import '../assets/styles/tagSkill.css';

const TagSkill = ({ skill }) => {
  return (
    <ul className='Tag'>
      {skill !== undefined &&
        skill.length > 0 &&
        skill.map((item) => (
          <li className='Tag-skill' key={item.id}>
            {item.name}
          </li>
        ))}
    </ul>
  );
};

export default TagSkill;
