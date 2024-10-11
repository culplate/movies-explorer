import css from './Header.module.scss';
import { Navigation } from '../Navigation/Navigation';
import { useMedia } from 'hooks/useMedia';
import { ActionIcons } from '../ActionIcons/ActionIcons';
import { useState } from 'react';
import { IconButton } from 'shared/components';

const Header = () => {
  const { isMobile, isLaptop, isDesktop } = useMedia();
  const [isMobNavOpened, seIsMobNavOpened] = useState(false);

  return (
    <header className={css.header}>
      {/* TODO move to separate shared comp */}
      <IconButton
        id={'Logo'}
        iconWidth={isMobile ? 116.1 : isLaptop ? 165.8 : 199}
        iconHeight={isMobile ? 35 : isLaptop ? 50 : 60}
      />

      {!isMobile && (
        <>
          <Navigation />
          <ActionIcons />
        </>
      )}
    </header>
  );
};

export default Header;
