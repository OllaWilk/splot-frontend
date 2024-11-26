import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { selectAllColumns } from '../../../redux/selectors/columnsSelector';
import { addColumn } from '../../../redux/slices/columnSlice';
import { Creator } from '../Creator/Creator';
import { Column } from '../Column/Column';
import styles from './List.module.scss';

export const List = () => {
  const dispatch = useDispatch<AppDispatch>();
  const columns = useSelector(selectAllColumns);

  return (
    <section className={styles.list}>
      <div className={styles.creator}>
        <Creator
          text={'Add new column'}
          action={(title) => {
            dispatch(addColumn({ title }));
          }}
        />
      </div>
      <div className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </div>
    </section>
  );
};
