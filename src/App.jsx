import { useState } from 'react';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Skills></Skills>
    <Projects></Projects>
    </>
  )
}

export default App
