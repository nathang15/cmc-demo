import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ProfilePage from './pages/profile/ProfilePage';
import 'bootstrap/dist/css/bootstrap.css';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "profile",
    element:  <ProfilePage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);