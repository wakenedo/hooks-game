import React from 'react';
import { Route, Routes } from 'react-router-dom'

//Pages
import AboutTheProject from './Pages/AboutTheProject';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import HooksGame from './Pages/HooksGame';


function App() {
  return (
    <div className="App">
     <Routes >
        <Route path='/HooksGame' element={<HooksGame />} />
        <Route path='/AboutTheProject' element={<AboutTheProject />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
