import { Container, HeadlineTopic } from 'shared/components';
import css from './Categories.module.scss';

const Categories = () => {
  return (
    <Container>
      <HeadlineTopic>Exprole our wide variety of categories</HeadlineTopic>

      <p className={css.text}>
        Whether you're looking for a comedy to make you laugh, a drama to make
        you think, or a documentary to learn something new
      </p>
    </Container>
  );
};

export default Categories;
