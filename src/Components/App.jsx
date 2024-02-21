import { Routes, Route } from "react-router-dom";
import { Header } from "./Header/Header";
import css from "./App.module.css";
import { Toaster } from "react-hot-toast";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("../Pages/HomePage"));
const MoviesPage = lazy(() => import("../Pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../Pages/MovieDetailsPage"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const NotFound = lazy(() => import("../Pages/NotFound"));

function App() {
  return (
    <>
      <Header />
      <div className={css.container}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
