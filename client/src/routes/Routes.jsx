
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SingleVideo from '../pages/singleVideo/singleVideo';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/videos/:videoId',
                element: <SingleVideo />
            }
        ],
    }
]);

export default router;