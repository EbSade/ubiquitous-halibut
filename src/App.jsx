import React from 'react';
import './My.css';
import OverlayMenu from './components/OverlayMenu';
import Menu from './components/Menu';
import Header from'./components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <OverlayMenu />
      <Menu />
      <Header />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;