import { ThemeProvider } from "@/components/theme-provider";
import {
  createHashRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { createContext, lazy, Suspense } from 'react';
import { data } from './data/data';
import "./server";
import { loader } from "@/pages/ProjectDetail";
import Certificates from "./pages/Certificates";
const Home = lazy(()=> import("@/pages/Home"));
const MainLayout = lazy(()=> import("@/layout/MainLayout"));
const Projects = lazy(()=> import("@/pages/Projects"));
const ProjectDetail = lazy(()=> import("@/pages/ProjectDetail"));
const AppStack = lazy(()=> import("@/pages/AppStack"));
const Loader = lazy(()=> import("@/pages/Loader"));
const NotFound = lazy(()=> import("@/pages/NotFound"));
const ErrorBoundary = lazy(()=> import("@/components/ErrorBoundary"));

export const DataContext = createContext(data);

export default function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/certificates",
          element: <Certificates />
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
          path: '/404',
          element: <NotFound />,
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/404" replace/>,
    },
  ]);
  return (
    <>
      <Suspense fallback={<Loader/>}>
        <DataContext.Provider value={data}>  
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <RouterProvider router={router} future={{ v7_startTransition: true }}/>
          </ThemeProvider>
        </DataContext.Provider>
      </Suspense>
    </>
  );
}
