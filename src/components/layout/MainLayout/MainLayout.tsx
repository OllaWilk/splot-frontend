import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { ButtonLogout, Logo, Navigation } from '../../common/index';
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './MainLayout.module.scss';

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.layoutWrapper}>
      <header className={styles.navigation}>
        <button className={styles.toggleButton} onClick={toggleNavigation}>
          {!isOpen ? (
            <div>
              <RxHamburgerMenu />
            </div>
          ) : (
            <div>
              <IoClose />
            </div>
          )}
        </button>
        <Link to={'/cockpit'} className={styles.logoWrap}>
          <Logo text={'SplotApp'} slogan={false} />
        </Link>
        <Navigation toggleNavigation={toggleNavigation} isOpen={isOpen} />
        <ButtonLogout />
      </header>
      <section className={styles.cockpit}>
        <Outlet />
      </section>
    </div>
  );
};

export { MainLayout };
