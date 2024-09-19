import css from './HeadlineTopic.module.scss';

const HeadlineTopic = ({ children }) => {
  return <h2 className={css.headline}>{children}</h2>;
};

export default HeadlineTopic;
