import { useEffect, useState } from "react";
import { fetchTrending } from "../../api";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { MovieList } from "../Components/MovieList/MovieList";

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchTrending();
        setTrending(fetchedData);
      } catch (error) {
        toast.error("Whoops, reload the page.");
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <h1>Trending this week</h1>
      <MovieList data={trending} />
    </main>
  );
}
