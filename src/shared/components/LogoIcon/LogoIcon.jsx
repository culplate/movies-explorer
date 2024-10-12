import css from './LogoIcon.module.scss';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

import { icons as sprite } from 'shared/icons';
import { useMedia } from 'hooks/useMedia';

const LogoIcon = ({ iconClassName }) => {
  const { isMobile, isLaptop } = useMedia();

  return (
    <NavLink to={'/'}>
      <svg
        width={isMobile ? 116.1 : isLaptop ? 165.8 : 199}
        height={isMobile ? 35 : isLaptop ? 50 : 60}
        className={clsx(css.icon, iconClassName && iconClassName)}
      >
        <use xlinkHref={`${sprite}#Logo`}></use>
      </svg>
    </NavLink>
  );
};

export default LogoIcon;
