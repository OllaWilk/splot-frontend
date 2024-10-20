import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ButtonLogout, Footer, Logo, Navigation } from '../../common/index';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import styles from './MainLayout.module.scss';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.layoutWrapper}>
      <header className={`${styles.navigation} ${isOpen ? styles.open : ''}`}>
        <Link to={'/cockpit'} className={styles.logoWrap}>
          <Logo text={'SplotApp'} slogan={false} />
        </Link>
        <Navigation />
        <ButtonLogout />
        <button className={styles.toggleButton} onClick={toggleNavigation}>
          {!isOpen ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      </header>

      <section className={styles.cockpit}>
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export { MainLayout };
