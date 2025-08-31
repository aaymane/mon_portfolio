import React from 'react';
import './cv.css';

const Cv = () => {
  return (
    <div>
      <div className="fixed-cv-button">
        <a href="/cv/CV.pdf" target="_blank" rel="noreferrer" download>
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Cv;
