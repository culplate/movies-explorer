import { IconButton } from 'shared/components';
import css from './ActionIcons.module.scss';
import { useMedia } from 'hooks/useMedia';

export const ActionIcons = () => {
  const { isLaptop, isDesktop } = useMedia();
  return (
    <div className={css.iconWrap}>
      <IconButton
        id={'magnifying-glass'}
        iconHeight={isLaptop ? 24 : 34}
        iconWidth={isLaptop ? 24 : 34}
      />
      <IconButton
        id={'bell'}
        iconHeight={isLaptop ? 24 : 34}
        iconWidth={isLaptop ? 24 : 34}
      />
    </div>
  );
};
