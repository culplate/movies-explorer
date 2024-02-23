import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { fetchByID, fetchReviewsByID, fetchCreditsByID } from "../../api";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "../Components/Loader/Loader";
import { HeadlineMain } from "../Components/HeadlineMain/HeadlineMain";
import { BackLink } from "../Components/BackLink/BackLink";

export default function MovieDeatilsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function FetchMovie() {
      try {
        setLoading(true);
        const fetchedMovie = await fetchByID(movieId);
        setMovie(fetchedMovie);
      } catch (error) {
        toast.error("Whoops, reload the page.");
      } finally {
        setLoading(false);
      }
    }
    FetchMovie();
  }, []);

  return (
    <main>
      <BackLink route={backLinkHref} />
      {loading && <Loader />}
      {!loading && (
        <div>
          <HeadlineMain>{movie.original_title}</HeadlineMain>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} movie poster Image`}
          />
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Suspense fallback={<Loader />}>
            <Outlet context={[movieId]} />
          </Suspense>
        </div>
      )}
    </main>
  );
}
