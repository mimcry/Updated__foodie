import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";


import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";

import Category from "./components/categoryitem/Category";

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
    </div>
  );
}

export default App;
