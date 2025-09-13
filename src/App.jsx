import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Layout from './Components/Layout/Layout'
import { Toaster } from 'react-hot-toast'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [{ index: true, element: <Home /> }]
    }
  ])

  return (
    <>
      <RouterProvider router={router}>
      </RouterProvider>
      <Toaster position="top-center" reverseOrder={false} />

    </>
  )
}

export default App
