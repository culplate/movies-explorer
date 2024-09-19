import { Routes, Route } from 'react-router-dom';

import { HomePage, MovieDetailsPage, MoviesPage, NotFound } from './pages';
import { SharedLayout } from 'shared/components';
import { MovieCast } from 'modules/movieCast';
import { MovieReviews } from 'modules/movieReviews';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
