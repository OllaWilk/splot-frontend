import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaStar, FaRocket } from 'react-icons/fa';
import { TbUfo } from 'react-icons/tb';
import { FaEarthAmericas } from 'react-icons/fa6';
import { IoLibrary } from 'react-icons/io5';

import style from './Navigation.module.scss';

interface Props {
  toggleNavigation: () => void;
  isOpen: boolean;
}

const Navigation = ({ toggleNavigation, isOpen }: Props) => {
  const navigation = [
    { name: 'Cockpit', path: 'cockpit', icon: <FaStar /> },
    { name: 'Library', path: 'library', icon: <IoLibrary /> },
    { name: 'Info', path: 'info', icon: <FaRocket /> },
    { name: 'For Recruiters', path: 'AleksandraWilk', icon: <TbUfo /> },
    { name: 'Portfolio', path: 'portfolio', icon: <FaEarthAmericas /> },
  ];

  return (
    <nav className={`${style.component} ${isOpen ? style.open : style.close}`}>
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.active}` : style.navLink
          }
          to={`/${item.path}`}
          onClick={toggleNavigation}
        >
          <div className={style.mark}>{item.icon}</div>
          <span>{item.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export { Navigation };
