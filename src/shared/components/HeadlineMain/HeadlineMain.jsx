import css from './HeadlineMain.module.scss';

const HeadlineMain = ({ children }) => {
  return <h1 className={css.headline}>{children}</h1>;
};

export default HeadlineMain;
