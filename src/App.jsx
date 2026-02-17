import { useState } from 'react'

import Page1 from "./components//Page1";
import Navbar from "./components//Navbar";
import './App.css'
import Login from './components/Login';

function App() {
 

  return (
    <>
       <Navbar/>
    {/* <Page1/> */}
     <Login/>
    </>
  )
}

export default App
