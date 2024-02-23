import css from "./BackLink.module.css";
import { Link } from "react-router-dom";

export const BackLink = ({ route }) => (
  <Link className={css.link} to={route}>
    Go back
  </Link>
);
