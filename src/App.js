import React, { useEffect, useState } from 'react';
import Home from './components/sections/Home';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Fab from './components/tools/Fab';
import upArrow from './img/icons/up-arrow-icon.svg';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowY, setWindowY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });

    window.addEventListener('scroll', () => {
      setWindowY(window.scrollY);
    });
  }, []);
  return (
    <div className='App'>
      <Home windowWidth={windowWidth} />
      <Skills />
      <Projects windowWidth={windowWidth} />
      <Contact />
      {windowY > 600 && <Fab href='#home' icon={upArrow} />}
    </div>
  );
}

export default App;
