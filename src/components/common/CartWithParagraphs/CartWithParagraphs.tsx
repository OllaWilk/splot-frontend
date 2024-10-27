import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartWithParagraphs.module.scss';

interface Props {
  cart: {
    title?: string;
    description?: string;
    benefits?: string[];
    cta: string;
  };
  isVisible?: boolean;
}

const CartWithParagraphs = ({ cart, isVisible }: Props) => {
  const { title, description, benefits, cta } = cart;
  return (
    <div className={isVisible ? styles.textWrap : styles.hidden}>
      <h1>
        {isVisible}
        {title}
      </h1>
      <p className={styles.description}>{description}</p>
      <ul className={styles.benefits}>
        {benefits?.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <Link to={'/cockpit'} className={styles.ctaButton}>
        {cta}
      </Link>
    </div>
  );
};

export { CartWithParagraphs };
