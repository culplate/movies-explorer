export const SearchForm = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();

    onSearch(e.target.elements.query.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="query" placeholder="Explore movies"></input>
      <button type="submit">Search</button>
    </form>
  );
};
