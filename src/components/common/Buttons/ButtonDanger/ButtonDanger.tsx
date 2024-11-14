import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import style from './ButtonDanger.module.scss';

interface Props {
  dynamicPath?: string | string[];
  buttonName: string;
  disabled?: boolean | null | undefined;
  styles?: React.CSSProperties;
  onClick?: () => void;
}

const ButtonDanger = ({
  dynamicPath,
  buttonName,
  onClick,
  disabled,
  styles,
}: Props) => {
  const className = `${style.component} ${disabled ? style.disabled : ''}`;

  if (!dynamicPath)
    return (
      <button
        style={styles}
        className={className}
        disabled={!!disabled}
        onClick={onClick}
      >
        {parse(buttonName)}
      </button>
    );

  return disabled ? (
    <span className={className}>{parse(buttonName)}</span>
  ) : (
    <Link to={`/${dynamicPath}`} className={className} onClick={onClick}>
      {parse(buttonName)}
    </Link>
  );
};

export { ButtonDanger };
