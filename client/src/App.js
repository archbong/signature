// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import User from './pages/User';
import Signup from './pages/Signup';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <div>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" exact component={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/user" element={<User/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
