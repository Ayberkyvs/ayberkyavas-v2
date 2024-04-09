import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home"
import { createContext, useEffect, useState } from 'react';
import { data } from './data/data';
import Projects from './pages/Projects';
import ProjectDetail, { loader } from './pages/ProjectDetail';
import "./server"
import AppStack from './pages/AppStack';
import Loader from './pages/Loader';
import NotFound from './pages/NotFound';

export const DataContext = createContext(data)

export default function App() {
  const [loading, setLoading] = useState(true)
  const router = createBrowserRouter([
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
  useEffect(()=> {
    const timer = setTimeout(()=> {
      setLoading(false)
    }, 600)

    return () => clearTimeout(timer);
  }, [])
  return (
    <>
      <DataContext.Provider value={data}>  
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          {/* <RouterProvider router={router} /> */}
          {loading ? <Loader /> : <RouterProvider router={router} />}
        </ThemeProvider>
      </DataContext.Provider>
    </>
  )
}

