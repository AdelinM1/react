import React, { useState } from 'react';

const Navigation = ({ setActiveSection }) => {
  const [activeButton, setActiveButton] = useState('about');

  const handleButtonClick = (section) => {
    setActiveSection(section);
    setActiveButton(section);
  };

  return (
    <nav>
      <ul>
        <li className={activeButton === 'about' ? 'active' : ''} onClick={() => handleButtonClick('about')}>About Me</li>
        <li className={activeButton === 'portfolio' ? 'active' : ''} onClick={() => handleButtonClick('portfolio')}>Portfolio</li>
        <li className={activeButton === 'contact' ? 'active' : ''} onClick={() => handleButtonClick('contact')}>Contact</li>
        <li className={activeButton === 'resume' ? 'active' : ''} onClick={() => handleButtonClick('resume')}>Resume</li>
      </ul>
    </nav>
  );
};

export default Navigation;