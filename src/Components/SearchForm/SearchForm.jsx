import toast from "react-hot-toast";

export const SearchForm = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error("Enter your request");
      return;
    } else if (e.target.elements.query.value.trim().length < 3) {
      toast.error("Min 3 symbols");
      return;
    }
    onSearch(e.target.elements.query.value);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSearch}>
      <input type="text" name="query" placeholder="Explore movies"></input>
      <button type="submit">Search</button>
    </form>
  );
};
