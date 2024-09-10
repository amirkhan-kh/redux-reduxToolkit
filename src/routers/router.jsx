// src/AppRouter.jsx
import { createBrowserRouter } from 'react-router-dom';
import { Home, About, Users, Error}  from '../pages/index';
import App from '../App'

const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/users', element: <Users /> },
            { path: '*', element: <Error /> }
        ]
    } 
]
export const AppRouter = createBrowserRouter(routes);
