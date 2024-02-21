import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { fetchReviewsByID } from "../../../api";

export default function MovieReviews() {
  const [loading, setLoading] = useState(false);
  const [movieId] = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function FetchMovie() {
      try {
        setLoading(true);
        const fetchedReviews = await fetchReviewsByID(movieId);
        setReviews(fetchedReviews);
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
      <h3>Movie Reviews</h3>
      <p>{reviews.length || "No reviews"}</p>
      {!loading && reviews.length && (
        <ul>
          {reviews.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.author}</p>
                <p>{item.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
