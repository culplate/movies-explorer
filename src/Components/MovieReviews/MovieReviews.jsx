import { useOutletContext } from "react-router-dom";

export const MovieReviews = () => {
  const [movie] = useOutletContext();
  return (
    <div>
      <h3>Movie Reviews</h3>
      <p>{movie.title}</p>
    </div>
  );
};
