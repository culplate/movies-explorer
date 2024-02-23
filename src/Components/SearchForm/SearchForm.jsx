import toast from "react-hot-toast";
import css from "./SearchForm.module.css";

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
    <form className={css.form} onSubmit={handleSearch}>
      <input
        className={css.input}
        type="text"
        name="query"
        placeholder="Explore movies"
      ></input>
      <button className={css.button} type="submit">
        Search
      </button>
    </form>
  );
};
