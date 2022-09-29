import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";


import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";

import Commonsection from './components/commonsection/Commonsection';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>

      <Footer></Footer>
      {/* <BrowserRouter>
        <Routes>
          <Route path="category" element={<Home/>}/>
        </Routes>
      </BrowserRouter> */}
   <Commonsection></Commonsection>
    </div>
  );
}

export default App;
