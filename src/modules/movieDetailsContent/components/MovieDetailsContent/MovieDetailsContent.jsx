import css from './MovieDetailsContent.module.scss';

import { HeadlineTopic, NoImage } from 'shared/components';

const MovieDetailsContent = ({ movieData }) => {
  if (!movieData) {
    // TODO add loader
    return <p>Loading...</p>;
  }

  return (
    <div className={css.container}>
      {movieData.poster_path ? (
        <img
          className={css.poster}
          src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
          alt={`${movieData.title} movie poster Image`}
        />
      ) : (
        <NoImage />
      )}
      <div className={css.containerInfo}>
        <HeadlineTopic className={css.headline}>
          {movieData.original_title}
        </HeadlineTopic>
        <p>{movieData.overview}</p>
        <p>
          <span className={css.description}>Official website:</span>
          <a href={movieData.homepage}>{movieData.homepage}</a>
        </p>
        <p>
          <span className={css.description}>Rating:</span>{' '}
          {movieData.vote_average}
        </p>
        <p>
          <span className={css.description}>Duration:</span> {movieData.runtime}{' '}
          minutes
        </p>
      </div>
    </div>
  );
};

export default MovieDetailsContent;
