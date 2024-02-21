import { useEffect, useState } from "react";
import { fetchTrending } from "../../api";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

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
      <ul>
        {trending.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`movies/${item.id}`} state={{ from: location }}>
                {item.original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
