import css from "./ReviewCard.module.css";

export const ReviewCard = ({ reviewInfo }) => {
  return (
    <li className={css.card}>
      <p className={`${css.author} ${css.text}`}>{reviewInfo.author}</p>
      <p className={`${css.reviewText} ${css.text}`}>{reviewInfo.content}</p>
    </li>
  );
};
