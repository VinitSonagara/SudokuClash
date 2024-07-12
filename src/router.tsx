import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreateLobby from './pages/CreateLobby';
import JoinLobby from './pages/JoinLobby';
import Lobby from './pages/Lobby';

const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/create',
        element: <CreateLobby />,
    },
    {
        path: '/join',
        element: <JoinLobby />,
    },
    {
        path: '/lobby/:id?',
        element: <Lobby />,
    },
];

export default createBrowserRouter(routes);
