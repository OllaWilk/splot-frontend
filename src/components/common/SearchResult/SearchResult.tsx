import React from 'react';
import style from './SearchResult.module.scss';

type Card = {
  id: string;
  columnId: string;
  title: string;
  completed: boolean;
};

interface Props {
  findedResults: Card[];
}

export const SearchResult = ({ findedResults }: Props) => {
  return (
    <div className={style.searchResult}>
      {findedResults.map((result) => (
        <div key={result.id}>{result.title}</div>
      ))}
    </div>
  );
};
