import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Game from '../pages/Game'
import { Principal } from '../pages/Principal'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Principal />
    },
    {
        path: '/Game',
        element: <Game />
    }

],
    {
        basename: '/BlackJack-game'
    }
)

export const MyRoutes = () => {
    return (
        <RouterProvider router={router} />
    )
}