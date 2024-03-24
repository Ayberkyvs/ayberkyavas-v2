import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from "./pages/Home"
import { createContext } from 'react';
import { data } from './data/data';

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

