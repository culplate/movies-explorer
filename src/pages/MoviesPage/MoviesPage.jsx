import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { fetchByQuery } from '../../services/themoviedbApi';

import {
  Container,
  HeadlineMain,
  HeadlineTopic,
  Loader,
} from 'shared/components';
import { MovieList } from 'modules/movieList';
import { SearchForm } from 'modules/searchForm';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleSearch = (newQuery) => setSearchParams({ query: newQuery });

  useEffect(() => {
    if (!query) return;

    async function fetchData() {
      try {
        setLoading(true);
        const fetchedData = await fetchByQuery(query);
        setResults(fetchedData);
      } catch (error) {
        toast.error('Something went wrong. Reload page', {
          id: 'fetchError',
        });
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [query]);

  return (
    <main>
      <Container>
        <HeadlineMain>Movies Search</HeadlineMain>
        {loading && <Loader />}
        {query && (
          <HeadlineTopic>Showing results for - "{query}"</HeadlineTopic>
        )}
        <SearchForm onSearch={handleSearch} />
        <MovieList data={results} />
      </Container>
    </main>
  );
}
