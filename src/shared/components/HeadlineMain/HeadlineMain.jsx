import clsx from 'clsx';
import css from './HeadlineMain.module.scss';

const HeadlineMain = ({ children, className }) => {
  return (
    <h1 className={clsx(css.headline, className && className)}>{children}</h1>
  );
};

export default HeadlineMain;
