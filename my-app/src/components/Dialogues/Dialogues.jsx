import React from 'react';

import s from './Dialogues.module.css';

const Dialogues = (props) => {
  return (
    <div>
      <div className={s.dialogues}>
        <div className={s.names}>
          <div className={s.name1 + ' ' + s.active}>Misha</div>
          <div className={s.name1}>Dima</div>
          <div className={s.name1}>Maksim</div>
          <div className={s.name1}>Katya</div>
          <div className={s.name1}>Dasha</div>
          <div className={s.name1}>Victor</div>
          <div className={s.name1}>Svetlana</div>
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
