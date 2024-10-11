import { Link, useLocation } from 'react-router-dom';
import css from './MovieCard.module.scss';

import { NoImage } from 'shared/components';

export const MovieCard = ({ data }) => {
  const currLocation = useLocation();
  return (
    <li>
      <Link
        to={
          currLocation.pathname === '/movies'
            ? `${data.id}`
            : `movies/${data.id}`
        }
        state={currLocation}
      >
        <div className={css.card}>
          <span className={css.title}>{data.original_title}</span>
          {data.poster_path ? (
            <img
              className={css.poster}
              src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
              alt={`${data.title} movie poster Image`}
            />
          ) : (
            <NoImage />
          )}
        </div>
      </Link>
    </li>
  );
};
