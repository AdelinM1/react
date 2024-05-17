import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import './styles.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div className="App">
      <Header />
      <Navigation setActiveSection={setActiveSection} />
      {activeSection === 'about' && <AboutMe />}
      {activeSection === 'portfolio' && <Portfolio />}
      {activeSection === 'contact' && <ContactForm />}
      {activeSection === 'resume' && <Resume />}
    </div>
  );
};

export default App;