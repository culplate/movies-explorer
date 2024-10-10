import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isLaptop = useMediaQuery({ query: '(min-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });

  return useMemo(
    () => ({
      isMobile: !isLaptop && !isDesktop,
      isLaptop: isLaptop && !isDesktop,
      isDesktop,
    }),
    [isLaptop, isDesktop]
  );
};
