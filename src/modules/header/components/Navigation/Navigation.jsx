import { NavLink } from 'react-router-dom';
import css from './Navigation.module.scss';

export const Navigation = () => {
  const activeLinkClass = ({ isActive }) => (isActive ? css.active : '');
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={activeLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={activeLinkClass}>
        Movies & Shows
      </NavLink>
      <NavLink to="/kek" className={activeLinkClass}>
        Support
      </NavLink>
      <NavLink to="/movlies" className={activeLinkClass}>
        Subscriptions
      </NavLink>
    </nav>
  );
};
