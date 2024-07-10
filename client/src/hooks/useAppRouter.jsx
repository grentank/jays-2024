import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../components/pages/MainPage';
import ChairsPage from '../components/pages/ChairsPage';
import LoginPage from '../components/pages/LoginPage';
import SignupPage from '../components/pages/SignupPage';
import ProtectedRoute from '../components/hoc/ProtectedRoute';
import AccountPage from '../components/pages/AccountPage';

export default function useAppRouter(user) {
  return createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <MainPage />,
        },
        {
          path: '/chairs',
          element: <ChairsPage user={user} />,
        },
        {
          path: '/account',
          element: (
            <ProtectedRoute isAllowed={!!user} redirectPath="/login">
              <AccountPage />
            </ProtectedRoute>
          ),
          // errorElement: <Navigate to="/login" replace />,
          // loader: () => axiosInstance('/chairs/my').then((res) => res.data),
        },
        {
          element: <ProtectedRoute isAllowed={!user} />,
          children: [
            {
              path: '/login',
              element: <LoginPage />,
            },
            {
              path: '/signup',
              element: <SignupPage />,
            },
          ],
        },
      ],
    },
  ]);
}
