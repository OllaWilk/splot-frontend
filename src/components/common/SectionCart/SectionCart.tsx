import React from 'react';
import style from './SectionCart.module.scss';

type SectionCartProps = {
  children: React.ReactNode;
};

const SectionCart: React.FC<SectionCartProps> = ({ children }) => {
  return <div className={style.sectionComponent}>{children}</div>;
};

export { SectionCart };
