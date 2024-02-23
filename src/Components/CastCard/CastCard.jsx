import css from "./CastCard.module.css";
export const CastCard = ({ castInfo }) => {
  return (
    <li className={css.card}>
      <p className={css.title}>{castInfo.name}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500/${castInfo.profile_path}`}
        alt="kek"
      />
    </li>
  );
};
