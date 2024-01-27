import { createBrowserRouter, Link } from 'react-router-dom';
import { NotFound } from '../components/Error/404';
import Home from '../pages/HomPage';
import ProductDetail from '../pages/DetailProduct';
import ChooseCategory from '../pages/ChooseCategory/chooseCategory';
export const Routers = createBrowserRouter([
  {
    path: 'about',
    element: <NotFound />,
  },
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'detail',
    element: <ProductDetail />,
  },
  {
    path: 'ChooseCategory',
    element: <ChooseCategory />,
  },
]);
