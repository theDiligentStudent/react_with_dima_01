import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Dialogues.module.css';

const NameInterlocutor = (props) => {
  let path = '/Dialogues/' + props.id;
  return (
    <div className={s.name1}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const TextMessage = (props) => {
  return(
    <div className={s.message}>{props.textMessage}</div>

  )
}

const Dialogues = (props) => {
  return (
    <div>
      <div className={s.dialogues}>
        <div className={s.names}>
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/1'>Misha</NavLink>
          </div> */}
          <NameInterlocutor name='Misha' id='1' />
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/2'>Dima</NavLink>
          </div> */}
          <NameInterlocutor name='Dima' id='2' />
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/3'>Maksim</NavLink>
          </div> */}
          <NameInterlocutor name='Maksim' id='3'/>
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/4'>Katya</NavLink>
          </div> */}
          <NameInterlocutor name='Katya' id='4'/>
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/5'>Alesia</NavLink>
          </div> */}
          <NameInterlocutor name='Alecia' id='5'/>
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/6'>Victor</NavLink>
          </div> */}
          <NameInterlocutor name='Victor' id='6'/>
          {/* <div className={s.name1}>
            <NavLink to='/Dialogues/7'>Svetlana</NavLink>
          </div> */}
          <NameInterlocutor name='Svetlana' id='7'/>
        </div>
        <div className={s.messages}>
          {/* <div className={s.message}>Hello!!</div> */}
          <TextMessage textMessage='Hello!!'/>
          {/* <div className={s.message}>How are you?!</div> */}
          <TextMessage textMessage='How are you?!'/>
          {/* <div className={s.message}>How's your study??!</div> */}
          <TextMessage textMessage="How's your study??!"/>
          {/* <div className={s.message}>How's your React?!</div> */}
          <TextMessage textMessage="How's your React?!"/>
          <div className={s.message}></div>
        </div>
      </div>
    </div>
  );
};


export default Dialogues;
