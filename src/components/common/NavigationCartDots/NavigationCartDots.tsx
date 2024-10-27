import React from 'react';
import styles from './NavigationCartDots.module.scss';

interface Props {
  currentCard: number;
  cartsNumb: number;
  handleNext: () => void;
  handlePrev: () => void;
  setCurrentCard: React.Dispatch<React.SetStateAction<number>>;
}

const NavigationCartDots = ({
  currentCard,
  cartsNumb,
  handleNext,
  handlePrev,
  setCurrentCard,
}: Props) => (
  <div className={styles.slideNav}>
    <button
      className={styles.navigationSlide}
      onClick={handlePrev}
      aria-label='Previous'
    >
      ◀
    </button>
    <div className={styles.dots}>
      {Array.from({ length: cartsNumb }).map((_, index) => (
        <span
          key={index}
          className={index === currentCard ? styles.activeDot : styles.dot}
          onClick={() => setCurrentCard(index)}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
    <button className={styles.navigationSlide} onClick={handleNext}>
      ▶
    </button>
  </div>
);

export { NavigationCartDots };
