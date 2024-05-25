import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AdminPage } from './pages/AdminPage';
import './global.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'admin',
    element: <AdminPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

createRoot(document.querySelector('#app')).render(<App />);
