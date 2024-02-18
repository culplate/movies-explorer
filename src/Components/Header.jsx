import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const activeLinkClass = ({ isActive }) => (isActive ? css.active : "");
export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={activeLinkClass}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeLinkClass}>
          Movies
        </NavLink>
      </nav>
    </header>
  );
};
