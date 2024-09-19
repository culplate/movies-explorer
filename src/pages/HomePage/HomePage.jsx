import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchTrending } from '../../services/themoviedbApi';

import { HeadlineMain } from 'shared/components';
import { MovieList } from 'modules/movieList';

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchTrending();
        setTrending(fetchedData);
      } catch (error) {
        toast.error('Whoops, reload the page.');
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
