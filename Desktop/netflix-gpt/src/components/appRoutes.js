import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import Browse from './Browse';

import Login from './Login';

    const appRoutes= createBrowserRouter([ 
        
        {
            path: "/",
            element:<Login/>,
        },
        {
            path: "/browse",
            element:<Browse/>
        }

    ]);



export default appRoutes;