import css from "./Header.module.css";
import { Navigation } from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};
