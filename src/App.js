import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes

} from 'react-router-dom'
import Home from "./pages/home";
import Login from "./pages/login";
import Feed from './pages/feed'
import { Teste } from "./pages";
import { Signup } from "./pages/signup"

function App() {
  return (
        <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/feed" element={<Feed/>}/>
              <Route path="/teste" element={<Teste/>}/>
              <Route path="/Signup" element={<Signup/>}/>
          </Routes>
        </Router>
  );
}

export default App;
