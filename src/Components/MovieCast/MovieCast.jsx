import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import { fetchCreditsByID } from "../../../api";
import { toast } from "react-hot-toast";

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
      <h3>Cast</h3>
      <p>{cast.length || "No info"}</p>
      {!loading && cast.length && (
        <ul>
          {cast.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.name}</p>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                  alt="kek"
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
