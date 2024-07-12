import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = (): React.JSX.Element => {
    return <RouterProvider router={router} />;
};

export default App;
