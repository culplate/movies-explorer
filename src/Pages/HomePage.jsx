import { useEffect, useState } from "react";
import { fetchTrending } from "../../api";

export default function HomePage() {
  const [trending, setTrending] = useState([]);

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
              <a href="#">{item.original_title}</a>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
