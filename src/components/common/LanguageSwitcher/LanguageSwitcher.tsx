import React from 'react';

import styles from './LanguageSwitcher.module.scss';

interface Props {
  lang: string;
  setLang: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageSwitcher = ({ lang, setLang }: Props) => (
  <div className={styles.language}>
    <button
      className={`${styles.flag} ${lang === 'pl' ? styles.active : ''}`}
      onClick={() => setLang('pl')}
      aria-label='Polski'
    >
      PL
    </button>
    <button
      className={`${styles.flag} ${lang === 'en' ? styles.active : ''}`}
      onClick={() => setLang('en')}
      aria-label='English'
    >
      EN
    </button>
  </div>
);

export { LanguageSwitcher };
