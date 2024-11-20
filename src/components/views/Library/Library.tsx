import React from 'react';
import { Chart, List, Search, SectionHeader } from '../../../components/common';
import style from './Library.module.scss';

export const Library = () => {
  return (
    <section className={style.library}>
      <Search />
      <SectionHeader
        text={'Interesting things I want to <sup>read, watch, play!</sup>'}
      />
      <div className={style.wrap}>
        <Chart />
        <List />
      </div>
    </section>
  );
};
