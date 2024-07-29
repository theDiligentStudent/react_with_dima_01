import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogues.module.css';

const Name = (props) => {
  return (
    <div className={s.name1}>
      <NavLink to={'/Dialogues/' + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Dialogues = (props) => {
  return (
    <div>
      <div className={s.dialogues}>
        <div className={s.names}>
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/1'>Misha</NavLink>
          </div> */}
          <Name name='Misha' id='1'/>
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/2'>Dima</NavLink>
          </div> */}
          <Name name='Dima' id='2'/>
          <div className={s.name1}>
            <NavLink to='/Dialogues/3'>Maksim</NavLink>
          </div>
          <div className={s.name1}>
            <NavLink to='/Dialogues/4'>Katya</NavLink>
          </div>
          <div className={s.name1}>
            <NavLink to='/Dialogues/5'>Alesia</NavLink>
          </div>
          <div className={s.name1}>
            <NavLink to='/Dialogues/6'>Victor</NavLink>
          </div>
          <div className={s.name1}>
            <NavLink to='/Dialogues/7'>Svetlana</NavLink>
          </div>
        </div>
        <div className={s.messages}>
          <div className={s.message}>Hello!!</div>
          <div className={s.message}>How are you?!</div>
          <div className={s.message}>How's your study??!</div>
          <div className={s.message}>How's your React?!</div>
          <div className={s.message}></div>
        </div>
      </div>
    </div>
  );
};

export default Dialogues;
