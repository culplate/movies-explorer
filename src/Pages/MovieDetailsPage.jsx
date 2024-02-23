import { useLocation, useParams, Outlet } from "react-router-dom";
import { fetchByID } from "../../api";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "../Components/Loader/Loader";
import { HeadlineMain } from "../Components/HeadlineMain/HeadlineMain";
import { BackLink } from "../Components/BackLink/BackLink";
import { MovieDetailsContent } from "../Components/MovieDetailsContent/MovieDetailsContent";
import { MovieDeatilsNav } from "../Components/MovieDetailsNav/MovieDetailsNav";

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
