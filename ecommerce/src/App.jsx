import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Shop from './Pages/Shop';


function App() {
    return(
     <Routes>
       <Route index  element={<HomePage/>}/>
       <Route path="/Shop" element={<Shop/>}/>
       
     </Routes>
 );

}

export default App
