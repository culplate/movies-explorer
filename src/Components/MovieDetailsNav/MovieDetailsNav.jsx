import { Link, NavLink } from "react-router-dom";
import css from "./MovieDetailsNav.module.css";

const activeLinkClass = ({ isActive }) => (isActive ? css.active : "");

export const MovieDeatilsNav = () => {
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
