import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../../assets/Shamima Akter (2).pdf'

const CTA = () => {
  return (
      <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
      <a href="https://m.me/nizum.nizum.1481/" target="_blank" className="btn btn-primary">
          Let's Talk
        </a>
      </div>
  )
}

export default CTA