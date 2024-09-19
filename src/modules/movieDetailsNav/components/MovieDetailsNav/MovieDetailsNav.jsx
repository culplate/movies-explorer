import { NavLink } from 'react-router-dom';
import css from './MovieDetailsNav.module.scss';

const activeLinkClass = ({ isActive }) => (isActive ? css.active : '');

const MovieDetailsNav = () => {
  return (
    <div className={css.container}>
      <NavLink className={activeLinkClass} to="cast">
        Cast
      </NavLink>
      <NavLink className={activeLinkClass} to="reviews">
        Reviews
      </NavLink>
    </div>
  );
};

export default MovieDetailsNav;
