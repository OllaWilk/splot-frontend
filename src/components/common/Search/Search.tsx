import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectSearchString } from '../../../redux/selectors/searchSelector';
import { setSearchString } from '../../../redux/slices/searchSlice';
import { ButtonIcon } from '../Buttons';
import { SearchResult } from '../SearchResult/SearchResult';
import styles from './Search.module.scss';

interface SearchProps {
  placeholder?: string;
}

export const Search = ({ placeholder = 'Search...' }: SearchProps) => {
  const dispatch = useDispatch();
  const searchString = useSelector(selectSearchString);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(event.target.value));
  };

  return (
    <>
      <div className={styles.search}>
        <ButtonIcon />
        <input
          type='text'
          value={searchString}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        {searchString && <SearchResult />}
      </div>
    </>
  );
};
