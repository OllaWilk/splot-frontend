import React, { useState } from 'react';
import { ButtonDanger, ButtonPurple } from '../Buttons';
import styles from './Creator.module.scss';

interface Props {
  text: string;
  action: (inputVal: string) => void;
}

export const Creator = ({ text, action }: Props) => {
  const [inputVal, setInputVal] = useState('');

  const handleOK = () => {
    if (inputVal !== '') {
      action(inputVal);
      setInputVal('');
    }
  };

  const handleCancel = () => {
    console.log('handleCancel');
  };

  return (
    <div className={styles.creator}>
      <input
        type='text'
        placeholder={text}
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <div
        className={`${styles.buttons} + ${inputVal ? styles.buttonsShown : ''}`}
      >
        <ButtonDanger buttonName={'OK'} onClick={handleOK} />
        <ButtonPurple text={'cancel'} onClick={handleCancel} />
      </div>
    </div>
  );
};
