import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Login';

const Routes = () => {
    const appRouter = createBrowserRouter([
        {
          path: '/',
          element: <Login />
        }
      ])
  return (
    <RouterProvider router={appRouter} />  
  )
}

export default Routes