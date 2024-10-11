import css from './MovieCast.module.scss';
import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { fetchCreditsByID } from 'services/themoviedbApi';

import { HeadlineTopic, Loader } from 'shared/components';
import { CastCard } from '../CastCard/CastCard';

const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [movieId] = useOutletContext();

  useEffect(() => {
    async function FetchMovie() {
      try {
        setLoading(true);
        const fetchedCast = await fetchCreditsByID(movieId);
        setCast(fetchedCast);
      } catch (error) {
        toast.error('Whoops, reload the page.');
      } finally {
        setLoading(false);
      }
    }
    FetchMovie();
  }, [movieId]);

  return (
    <div>
      <HeadlineTopic>Cast</HeadlineTopic>
      {loading && <Loader />}
      {!loading && cast.length > 0 && (
        <ul className={css.container}>
          {cast.map((item) => {
            return <CastCard key={item.id} castInfo={item} />;
          })}
        </ul>
      )}
      {!cast.length && <p>No info</p>}
    </div>
  );
};

export default MovieCast;
