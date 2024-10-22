import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Mainpage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
