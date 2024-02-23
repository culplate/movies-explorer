import { Link, useLocation } from "react-router-dom";
import css from "./MovieCard.module.css";

export const MovieCard = ({ data, location }) => {
  const currLocation = useLocation();
  return (
    <li>
      <Link
        to={
          currLocation.pathname === "/movies"
            ? `${data.id}`
            : `movies/${data.id}`
        }
        state={{ from: location }}
      >
        <div className={css.card}>
          <span className={css.title}>{data.original_title}</span>
          <img
            className={css.poster}
            src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
            alt={`${data.title} movie poster Image`}
          />
        </div>
      </Link>
    </li>
  );
};
