import { Link, useLocation, useParams, Outlet } from "react-router-dom";
import { fetchByID } from "../../api";
import { useEffect, useState } from "react";

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
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    FetchMovie();
  }, []);

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      {!loading && (
        <div>
          <h1>Movie details page - {movieId}</h1>
          <h2>{movie.original_title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={`${movie.title} movie poster Image`}
          />
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
          <Outlet context={[movie]} />
        </div>
      )}
    </main>
  );
}
