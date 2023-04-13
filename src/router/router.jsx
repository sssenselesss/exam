import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Main from "../Pages/Main";
import SingleProd from "../Pages/singleProd";

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [

            {
                path:"/",
                element: <Main />,
                index: true
            },
            {
                path:'single/:id',
                element : <SingleProd />
            }
        ]
    }
])

export default router;