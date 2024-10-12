import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { fetchTrending } from 'services/themoviedbApi';

import { Hero } from 'modules/hero';
import { Container } from 'shared/components';

export default function HomePage() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData = await fetchTrending();
        setTrending(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        toast.error('Whoops, reload the page.');
      }
    }
    fetchData();
  }, []);

  return (
    <main>
      <Hero trending={trending} />
    </main>
  );
}
