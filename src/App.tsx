import { ThemeProvider } from "@/components/theme-provider";
import {
  createHashRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home";
import { createContext, Suspense } from 'react';
import { data } from './data/data';
import Projects from './pages/Projects';
import ProjectDetail, { loader } from './pages/ProjectDetail';
import "./server";
import AppStack from './pages/AppStack';
import Loader from './pages/Loader';
import NotFound from './pages/NotFound';

export const DataContext = createContext(data);

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: '/projects',
          element: <Outlet />,
          children: [
            {
              path: "/projects",
              element: <Projects />,
            },
            {
              path: ':id',
              element: <ProjectDetail />,
              loader: loader,
            },
          ],
        },
        {
          path: '/appstack',
          element: <AppStack />,
        },
        {
          path: "*",
          element: <NotFound />
        },
      ],
    },
  ]);
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <DataContext.Provider value={data}>  
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
          </ThemeProvider>
        </DataContext.Provider>
      </Suspense>
    </>
  );
}
