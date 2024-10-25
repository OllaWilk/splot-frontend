import React from 'react';
import { Link } from 'react-router-dom';
import { SiGmail } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <span>Aleksandra Wilk | </span>
        <Link to='https://github.com/OllaWilk'>
          <FaGithub />
        </Link>
        <Link to='https://www.linkedin.com/in/alex-wilk/'>
          <FaLinkedin />
        </Link>
        <a href='mailto:alex.dev.wilk@gmail.com'>
          <SiGmail />
        </a>
      </div>
    </footer>
  );
};
