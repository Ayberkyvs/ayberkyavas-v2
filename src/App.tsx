import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home"
import { createContext } from 'react';
import { data } from './data/data';
import Projects from './pages/Projects';
import ProjectDetail, { loader } from './pages/ProjectDetail';
import "./server"
import AppStack from './pages/AppStack';

export const DataContext = createContext(data)
export default function App() {
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
        }
      ],
    },
  ]);
  return (
    <DataContext.Provider value={data}>  
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </DataContext.Provider>
  )
}

