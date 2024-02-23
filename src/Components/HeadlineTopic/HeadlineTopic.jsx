import css from "./HeadlineTopic.module.css";

export const HeadlineTopic = ({ children }) => {
  return <h2 className={css.headline}>{children}</h2>;
};
