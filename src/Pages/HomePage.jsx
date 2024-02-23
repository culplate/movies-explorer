import { useEffect, useState } from "react";
import { fetchTrending } from "../../api";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { MovieList } from "../Components/MovieList/MovieList";
import { HeadlineMain } from "../Components/HeadlineMain/HeadlineMain";

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
      <HeadlineMain>Trending this week</HeadlineMain>
      <MovieList data={trending} />
    </main>
  );
}
