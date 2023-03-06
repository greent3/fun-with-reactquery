import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClientProvider, QueryClient } from 'react-query';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import ColorDescription from './components/ColorDescription';
// import ErrorPage from './components/ErrorPage';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/color/:id",
//     element: <ColorDescription />,
//   }
// ]);


root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <RouterProvider router={router} /> */}
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
