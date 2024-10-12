import css from './Hero.module.scss';
import { Container, HeadlineMain, IconButton } from 'shared/components';
import { HeroText } from '../HeroText/HeroText';

const Hero = () => {
  return (
    <>
      <div className={css.heroBackground}></div>
      <Container className={css.hero}>
        <div className={css.heroInfoWrapper}>
          <HeadlineMain className={css.title}>
            The Best Streaming Experience
          </HeadlineMain>

          <HeroText />

          {/* TODO open smth */}
          <IconButton
            id={'play'}
            title={'Start Watching Now'}
            iconClassName={css.actionBtnIcon}
            btnClassName={css.actionBtn}
            onClick={() => {}}
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
