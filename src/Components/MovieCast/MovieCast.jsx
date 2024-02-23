import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchCreditsByID } from "../../../api";
import { toast } from "react-hot-toast";
import { Loader } from "../Loader/Loader";
import { CastCard } from "../CastCard/CastCard";
import css from "./MovieCast.module.css";
import { HeadlineTopic } from "../HeadlineTopic/HeadlineTopic";
export default function MovieReviews() {
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
        toast.error("Whoops, reload the page.");
      } finally {
        setLoading(false);
      }
    }
    FetchMovie();
  }, []);

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
}
