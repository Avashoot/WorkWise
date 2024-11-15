import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TakeTest from "./TakeTest"
import Body from './Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children: [
      {
        path: "/",
        element : <Body/>
      },
      {
        path: "test",
        element : <TakeTest />,
      },
    ]
  },
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={appRouter}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
