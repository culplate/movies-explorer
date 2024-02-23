import css from "./HeadlineMain.module.css";

export const HeadlineMain = ({ children }) => {
  return <h1 className={css.headline}>{children}</h1>;
};
