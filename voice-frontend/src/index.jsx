import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom'
import UserLogin from './components/user_credentials/UserLogin';
import AdminLogin from './components/user_credentials/AdminLogin';
import UserRegister from './components/user_credentials/UserRegister';
import AdminRegister from './components/user_credentials/AdminRegister';
import Product from './components/Products/Product';
import Home from './components/Dashboard/Home';
import Cart from './components/Cartpage/Cart';
import { Provider } from 'react-redux';
import {store , persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react';
import SuccessPurchase from './components/SuccessPurchase';
import Purchase from './components/PurchasePage/Purchase';
import NotAuth from './components/notAuth';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Navigate to="/home" replace/>
  },
  {
    path:'/admin',
    element:<Navigate to="/admin/home" replace/>
  },
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/product',
        element:<Product/>
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/purchase',
        element:<Purchase/>
      }
    ]
  },
  {
    path: '/admin/home',
    element: <App />
  },
  {
    path: '/login',
    element: <UserLogin />,
  },
  {
    path:'/admin/login',
    element:<AdminLogin/>
  },
  {
    path: '/register',
    element: <UserRegister />,
  },
  {
    path: '/admin/register',
    element: <AdminRegister />
  },
  {
    path:'/purchase-success',
    element:<SuccessPurchase/>
  },
  {
    path: '/unauth',
    element: <NotAuth />
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={appRouter} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
