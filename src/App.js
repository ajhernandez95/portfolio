import React, { useEffect, useState } from 'react';
import Home from './components/sections/Home';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './App.css';

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  return (
    <div className="App">
      <Home windowWidth={windowWidth} />
      <Skills />
      <Projects windowWidth={windowWidth} />
      <Contact />
    </div>
  );
}

export default App;
