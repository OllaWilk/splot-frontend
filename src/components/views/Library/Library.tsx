import React from 'react';
import { List, SectionHeader } from '../../../components/common';
import style from './Library.module.scss';

export const Library = () => {
  return (
    <section className={style.library}>
      <SectionHeader
        text={'Interesting things I want to <sup>read, watch, play!</sup>'}
      />
      <List />
    </section>
  );
};
