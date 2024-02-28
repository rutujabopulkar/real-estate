import React from 'react';

// importing Routes
import { Routes, Route } from 'react-router-dom'

//compomnents
import Header from './components/Header';
import Footer from './components/Footer'

//importing pages
import Home from './pages/Home';
import PropertyDetails from './pages/PropertyDetails';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return <div className='max-w-[1440px] mx-auto bg-white'>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/property/:id' element={<PropertyDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    <Footer />
    
  </div>;
};

export default App;
