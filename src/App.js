import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import HooksGame from './Pages/HooksGame';



function App() {
  

  return (
    <div className="App">
     <Routes >
        <Route path='/HooksGame' element={<HooksGame />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
