import React from 'react';
import { Card } from '@alexwilk/spacesteps-types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { selectCardById } from '../../../redux/selectors/cardsSelectores';
import { useParams } from 'react-router-dom';
import { purpleSpace } from '../../../images/index';
import { NotFound } from '../NotFound/NotFound';
import { ButtonBlack, Paragraph, SectionHeader } from '../../common';
import styles from './CardDetail.module.scss';

export const CardDetail = () => {
  const { cardId } = useParams();

  const card: Card | null = useSelector((state: RootState) =>
    cardId ? selectCardById(state, cardId) : null
  );

  if (!card)
    return (
      <NotFound message={'The  card does not exist or has been removed'} />
    );

  const displayKeys = [
    'description',
    'author',
    'year',
    'completed',
    'notes',
    'purcheseLink',
  ];

  const renderValue = (key: string) => {
    const value = card[key as keyof Card];
    switch (key) {
      case 'completed':
        return (
          <span
            className={value ? styles.statusCompleted : styles.statusPending}
          >
            {value ? 'Yes' : 'No'}
          </span>
        );
      case 'purcheseLink':
        return value ? (
          <ButtonBlack dynamicPath={value as string} buttonName={'Buy here'} />
        ) : (
          'Not available.'
        );
      default:
        return <Paragraph text={`${value || 'N/A'}`} />;
    }
  };

  return (
    <div className={styles.cardInfo}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={purpleSpace} alt={card.title} />
      </div>
      <div className={styles.details}>
        <SectionHeader text={`${card.title}`} />
        {displayKeys.map((key) => (
          <div key={key} className={styles.description}>
            <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>
            {renderValue(key)}
          </div>
        ))}
      </div>
    </div>
  );
};
