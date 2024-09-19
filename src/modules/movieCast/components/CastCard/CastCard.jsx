import css from './CastCard.module.scss';
import { NoImage } from 'shared/components';

export const CastCard = ({ castInfo }) => {
  return (
    <li className={css.card}>
      <p className={css.title}>{castInfo.name}</p>
      {castInfo.profile_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500/${castInfo.profile_path}`}
          alt={`${castInfo.name} photo`}
        />
      ) : (
        <NoImage />
      )}
    </li>
  );
};
