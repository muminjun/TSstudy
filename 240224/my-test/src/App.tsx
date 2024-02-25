import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Test from './pages/Test';

function App () {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />}/>
        <Route path='/about' element={<About />}/>
      </Route>
      <Route path='/test' element={<Test />}/>
    </Routes> 
  )
}

export default App;
