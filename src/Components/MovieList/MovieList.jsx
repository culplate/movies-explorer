import { useLocation } from "react-router-dom";
import { MovieCard } from "../MovieCard/MovieCard";
import css from "./MovieList.module.css";

export const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <ul className={css.container}>
      {data.map((item) => {
        return <MovieCard key={item.id} data={item} location={location} />;
      })}
    </ul>
  );
};
