import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Game from '../pages/Game'


const router= createBrowserRouter([
    {
        path:'/Blackjack',
        element: <Game/>
    },

])

export const MyRoutes = () => {
  return (
    <RouterProvider router={router}  />
  )
}