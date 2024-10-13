import css from './Header.module.scss';
import { Navigation } from '../Navigation/Navigation';
import { useMedia } from 'hooks/useMedia';
import { ActionIcons } from '../ActionIcons/ActionIcons';
import { useState } from 'react';
import { IconButton, LogoIcon } from 'shared/components';

const Header = () => {
  const { isMobile, isLaptop, isDesktop } = useMedia();
  const [isMobNavOpened, seIsMobNavOpened] = useState(false);

  return (
    <header className={css.header}>
      <LogoIcon />

      {!isMobile && (
        <>
          <Navigation />
          <ActionIcons />
        </>
      )}

      {isMobile && <IconButton />}
    </header>
  );
};

export default Header;
