import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { selectCardById } from '../../../redux/selectors/cardsSelectores';
import { useParams } from 'react-router-dom';
import { purpleSpace } from '../../../images/index';
import { NotFound } from '../NotFound/NotFound';
import { SectionHeader } from '../../common';
import styles from './CardDetail.module.scss';

export const CardDetail = () => {
  const { cardId } = useParams();

  const card = useSelector((state: RootState) =>
    selectCardById(state, cardId || '')
  );

  if (!card)
    return (
      <NotFound message={'The  card does not exist or has been removed'} />
    );

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={purpleSpace} alt={card.title} />
      </div>
      <div className={styles.cardDetails}>
        <SectionHeader text={`${card.title}`} />
        <div className={styles.cardInfo}>
          <p>
            <strong>Description:</strong>{' '}
            {card.description || 'No description available.'}
          </p>
          <div className={styles.detailsRow}>
            <p>
              <strong>Author:</strong> {card.author || 'Unknown'}
            </p>
            <p>
              <strong>Year:</strong> {card.year || 'N/A'}
            </p>
          </div>
          <div className={styles.detailsRow}>
            <p>
              <strong>Completed:</strong>{' '}
              <span
                className={
                  card.completed ? styles.statusCompleted : styles.statusPending
                }
              >
                {card.completed ? 'Yes' : 'No'}
              </span>
            </p>
            <p>
              <strong>Notes:</strong> {card.notes || 'No notes added.'}
            </p>
          </div>
          <p>
            <strong>Purchase Link:</strong>{' '}
            {card.purchaseLink ? (
              <a
                href={card.purchaseLink}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.purchaseLink}
              >
                Buy here
              </a>
            ) : (
              'Not available.'
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
