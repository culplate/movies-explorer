import css from './BackLink.module.scss';
import { Link, useLocation } from 'react-router-dom';

const BackLink = ({ route }) => {
  return (
    <Link className={css.link} to={route}>
      Go back
    </Link>
  );
};

export default BackLink;
