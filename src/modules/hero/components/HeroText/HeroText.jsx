import css from './HeroText.module.scss';
import { useMedia } from 'hooks/useMedia';

export const HeroText = () => {
  const { isMobile } = useMedia();
  return (
    <>
      {isMobile && (
        <p className={css.text}>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere.
        </p>
      )}
      {!isMobile && (
        <p className={css.text}>
          StreamVibe is the best streaming experience for watching your favorite
          movies and shows on demand, anytime, anywhere. With StreamVibe, you
          can enjoy a wide variety of content, including the latest
          blockbusters, classic movies, popular TV shows, and more. You can also
          create your own watchlists, so you can easily find the content you
          want to watch.
        </p>
      )}
    </>
  );
};
