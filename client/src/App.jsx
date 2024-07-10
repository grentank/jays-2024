import React from 'react';
import { RouterProvider } from 'react-router-dom';

import SkeletonLoader from './components/hoc/SkeletonLoader';
import useAppStore from './store/store';
import useAppInit from './hooks/useAppInit';
import useAppRouter from './hooks/useAppRouter';

function App() {
  const user = useAppStore((store) => store.user);
  useAppInit();

  const router = useAppRouter(user);

  return (
    <SkeletonLoader isLoading={user === undefined}>
      <RouterProvider router={router} />
    </SkeletonLoader>
  );
}

export default App;
