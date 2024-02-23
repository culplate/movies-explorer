import { useEffect, useState } from "react";
import { fetchByQuery } from "../../api";
import { SearchForm } from "../Components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../Components/Loader/Loader";
import { MovieList } from "../Components/MovieList/MovieList";
import { HeadlineMain } from "../Components/HeadlineMain/HeadlineMain";
import { HeadlineTopic } from "../Components/HeadlineTopic/HeadlineTopic";

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
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
        toast.error("Something went wrong. Reload page", {
          id: "fetchError",
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
      <HeadlineMain>Movies Search</HeadlineMain>
      {loading && <Loader />}
      {query && <HeadlineTopic>Showing results for - "{query}"</HeadlineTopic>}
      <SearchForm onSearch={handleSearch} />
      <MovieList data={results} />
    </main>
  );
}
