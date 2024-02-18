import { useEffect, useState } from "react";
import { fetchTrending } from "../../api";
import { Link, useLocation } from "react-router-dom";

export default function HomePage() {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchTrending();
        setTrending(fetchedData);
      } catch {
        console.log(error);
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
