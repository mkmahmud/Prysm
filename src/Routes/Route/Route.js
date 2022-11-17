import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Main from '../../Componentes/Layout/Main';
import Home from '../../Componentes/Pages/Home/Home';


const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main></Main>,
            children:[
                {
                    path:'/',
                    element:<Home></Home>
                }
            ]
        }
    ]);

    return (
        <RouterProvider router={router} />
    );
};

export default Router;