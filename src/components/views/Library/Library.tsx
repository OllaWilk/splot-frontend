import React from 'react';
import { List, Search, SectionHeader } from '../../../components/common';
import style from './Library.module.scss';

export const Library = () => {
  return (
    <section className={style.library}>
      <Search />
      <p>0/6</p>
      <SectionHeader
        text={'Interesting things I want to <sup>read, watch, play!</sup>'}
      />
      <List />
    </section>
  );
};
