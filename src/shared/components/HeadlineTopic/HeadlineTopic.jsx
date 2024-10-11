import clsx from 'clsx';
import css from './HeadlineTopic.module.scss';

const HeadlineTopic = ({ children, className }) => {
  return (
    <h2 className={clsx(css.headline, className && className)}>{children}</h2>
  );
};

export default HeadlineTopic;
