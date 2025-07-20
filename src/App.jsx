import React, { useState } from 'react';
import './App.css';
import StartGame from './pages/StartGame/StartGame';
import PlayGame from './pages/PlayGame/PlayGame';
import { Routes,Route  } from 'react-router-dom';

function App() {
  
  
  return (
    <>
       <div className="font-bold text-3xl mt-2">
           Welcome To Hangman Game
       </div>
    
       <Routes>
          <Route path="/start" element={<StartGame/>} />
          <Route path="/play" element={<PlayGame />} />
         <Route path="/*" element={<div>Page Not found</div>}/> 
       </Routes>
    </>
  );
}

export default App;

