import { useLocation, useParams, Outlet } from "react-router-dom";
import { fetchByID } from "../../api";
import { Suspense, useEffect, useState, useRef } from "react";
import { Loader } from "../Components/Loader/Loader";
import { BackLink } from "../Components/BackLink/BackLink";
import { MovieDetailsContent } from "../Components/MovieDetailsContent/MovieDetailsContent";
import { MovieDeatilsNav } from "../Components/MovieDetailsNav/MovieDetailsNav";

export default function MovieDeatilsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state);
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
      <BackLink route={backLinkHref.current ?? "/movies"} />
      {loading && <Loader />}
      {!loading && (
        <>
          <MovieDetailsContent movieData={movie} />
          <hr />
          <MovieDeatilsNav />
          <Suspense fallback={<Loader />}>
            <Outlet context={[movieId]} />
          </Suspense>
        </>
      )}
    </main>
  );
}
