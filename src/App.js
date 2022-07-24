import React from 'react';
import { Route, Routes } from 'react-router-dom'

//Pages
import AboutTheProject from './Pages/AboutTheProject';
import ComboList from './Pages/ComboList';
import Contact from './Pages/Contact';
import Donate from './Pages/Donate';
import Home from './Pages/Home';
import HooksGame from './Pages/HooksGame';
import HowToPlay from './Pages/HowToPlay';
import RoadMap from './Pages/RoadMap';


function App() {
  return (
    <div className="App">
     <Routes >
        <Route path='/Contact' element={<Contact />} />
        <Route path='/How_To_Play' element={<HowToPlay />} />
        <Route path='/Road_Map' element={<RoadMap />} />
        <Route path='/About' element={<AboutTheProject />} />
        <Route path='/Combo_List' element={<ComboList />} />
        <Route path='/Hooks_Game' element={<HooksGame />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
