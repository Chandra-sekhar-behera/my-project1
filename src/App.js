import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Signin from './Signin';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';



function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<Signin />} /> 
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
