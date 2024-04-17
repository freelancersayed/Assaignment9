import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Root from '../Root/Root';
import Home from '../Pages/Home';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';
import PrivateRouter from '../Pages/PrivateRouter';
import Blog from '../Pages/Blog';
import Contact from '../Pages/Contact';
import About from './About';
import Setting from '../Unity/Setting';
import EstateDetails from '../Pages/EstateDetails';
import ErrorPage from '../Unity/ErrorPage';
import Self from '../Pages/Self';
import { element } from 'prop-types';
import Estate from '../Pages/Estate';

const Router = createBrowserRouter([
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/profile',
                element: <PrivateRouter><Profile></Profile></PrivateRouter>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/setting',
                element: <PrivateRouter><Setting></Setting></PrivateRouter>
            },
            {
                path: '/estate/:id',
                element: <PrivateRouter><EstateDetails></EstateDetails></PrivateRouter>,
                loader: () => fetch("/data.json"),
            },
            {  
            path: '/self',
            element: <Self></Self>
            },
            {
                path:'/estate',
                element: <Estate></Estate>
            }
        ]
    }
])

export default Router;