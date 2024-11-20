import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import TakeTest from "./TakeTest"
import Body from './Body'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Quiz } from './Quiz';
// import FormData from './FormData';
// import tech_que from './technical_questions';
// import { personalityContext } from './FormData';
import { Outlet } from "react-router-dom";
import Header from "./Header";
import FetchData from './FetchData';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import userContext from './userContext';
import UpdateProfileData from './UpdateProfile';


// import {Quiz} from 'react-quiz-component';

const App = ()=> {

  const [signInedUserData, setSignInedUserData] = useState({
    firstName : "SIGN IN",
    imageUrl : "https://upload.wikimedia.org/wikipedia/commons/b/b5/Windows_10_Default_Profile_Picture.svg",
    domains : []
  })
  
  return (
    <div className="App">
      <userContext.Provider value={{signInedUserData, setSignInedUserData}}>
        <Header/>
        <Outlet/>
      </userContext.Provider>
      
    </div>
  );
}


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
      {
        path: "personality",
        element: <FetchData/>

      },
      {
        path:"signin",
        element:<Login/>
      },
      {
        path:"signup",
        element: <Register/>
      },
      {
        path:"profile",
        element:<Profile/>
      },
      {
        path:"updateprofile",
        element: <UpdateProfileData/>
      }
      
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
