import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import Shop from './Pages/Shop';
import Vendor from './Pages/Vendor';


function App() {
    return(
     <Routes>
       <Route index  element={<HomePage/>}/>
       <Route path="/Shop" element={<Shop/>}/>
       <Route path="/vendor" element={<Vendor/>}/>
       
     </Routes>
 );

}

export default App
