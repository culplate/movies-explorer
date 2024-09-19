import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { fetchReviewsByID } from '../../../../services/themoviedbApi';

import { Loader } from 'shared/components';
import { ReviewCard } from '../ReviewCard/ReviewCard';

const MovieReviews = () => {
  const [loading, setLoading] = useState(false);
  const [movieId] = useOutletContext();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function FetchMovie() {
      try {
        setReviews([]);
        setLoading(true);
        const fetchedReviews = await fetchReviewsByID(movieId);
        setReviews(fetchedReviews);
      } catch (error) {
        toast.error('Whoops, reload the page.');
      } finally {
        setLoading(false);
      }
    }
    FetchMovie();
  }, []);

  return (
    <div>
      <h3>Movie Reviews</h3>
      {loading && <Loader />}
      {!loading && reviews.length > 0 ? (
        <ul>
          {reviews.map((item) => {
            return <ReviewCard key={item.id} reviewInfo={item} />;
          })}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
    </div>
  );
};

export default MovieReviews;
