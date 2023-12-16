import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    </>
  )
}

export default App
