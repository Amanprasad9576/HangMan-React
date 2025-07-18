import React, { useState } from 'react';
import './App.css';
import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer';
function App() {
  
  return (
    <>
       <div className="font-bold text-3xl mt-2">
          Welcome To Hangman Game
       </div>
       <TextInputFormContainer
          onSubmit={(event)=>{
             console.log('Submitted value ,event.target.value');
          }}
       />
          
       
    </>
  );
}

export default App;

