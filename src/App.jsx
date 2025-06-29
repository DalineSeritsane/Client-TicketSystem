import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './components/Home'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Ticket from './pages/Ticket'

const App =()=> {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard />} />
         <Route path='/admin' element={<Admin />} />
         <Route path='/tickets' element={<Ticket />} />
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
    
    </>
  );
}

export default App;