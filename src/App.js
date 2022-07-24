import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Contact from './Pages/Contact';
import Home from './Pages/Home';
import HooksGame from './Pages/HooksGame';



function App() {
  

  return (
    <div className="App">
     <Routes >
        <Route path='/HooksGame' element={<HooksGame />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
