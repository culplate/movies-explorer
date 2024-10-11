import { Suspense, useEffect, useState, useRef } from 'react';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { fetchByID } from '../../services/themoviedbApi';

import { BackLink, Container, Loader } from 'shared/components';
import { MovieDetailsContent } from 'modules/movieDetailsContent';
import { MovieDetailsNav } from 'modules/movieDetailsNav';

export default function MovieDeatilsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from || '/movies');
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function FetchMovie() {
      try {
        setLoading(true);
        const fetchedMovie = await fetchByID(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        toast.error('Whoops, reload the page.');
      } finally {
        setLoading(false);
      }
    }
    FetchMovie();
  }, []);

  return (
    <main>
      <Container>
        <BackLink route={backLinkHref.current ?? '/movies'} />
        {loading && <Loader />}
        {!loading && (
          <>
            <MovieDetailsContent movieData={movie} />
            <hr />
            <MovieDetailsNav />
            <Suspense fallback={<Loader />}>
              <Outlet context={[movieId]} />
            </Suspense>
          </>
        )}
      </Container>
    </main>
  );
}
