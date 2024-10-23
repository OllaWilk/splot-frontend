import React, { MouseEventHandler, useEffect } from 'react';
import style from './Moda.module.scss';
import { EventForm } from '../Events';

interface Props {
  toggleIsOpen: MouseEventHandler<HTMLDivElement>;
  isOpen: boolean;
}
export const Modal = ({ toggleIsOpen, isOpen }: Props) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className={style.popupOverlay} onClick={toggleIsOpen}>
      <div className={style.popupContent} onClick={(e) => e.stopPropagation()}>
        <div className={`${style.controlPanel} ${style.popupForm}`}>
          <p onClick={toggleIsOpen} className={style.close}>
            x
          </p>
          <EventForm />
        </div>
      </div>
    </div>
  );
};
