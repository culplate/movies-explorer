import css from "./BackLink.module.css";
import { Link, useLocation } from "react-router-dom";

export const BackLink = ({ route }) => {
  return (
    <Link className={css.link} to={route}>
      Go back
    </Link>
  );
};
