import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import s from './SharedLayout.module.scss';

import { Header } from 'modules/header';
import { Loader } from 'shared/components';

const SharedLayout = () => {
  return (
    <>
      <div className={s.container}>
        <Header />
        <div className={s.content}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
        <Toaster position="top-right" />
      </div>
    </>
  );
};

export default SharedLayout;
