// import logo from './logo.svg';

import { Outlet } from "react-router-dom";


import Header from "./Header";


const App = ()=> {

  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
