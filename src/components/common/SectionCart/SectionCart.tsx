import React from 'react';
import style from './SectionCart.module.scss';

type SectionCartProps = {
  children: React.ReactNode;
  flexDirection?: string;
};

const SectionCart: React.FC<SectionCartProps> = ({
  flexDirection = 'row',
  children,
}) => (
  <div
    className={`${style.sectionComponent} ${
      flexDirection === 'column' ? style.column : ''
    } `}
  >
    {children}
  </div>
);

export { SectionCart };
