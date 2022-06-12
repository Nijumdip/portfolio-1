import React from 'react';
import CV from '../../assets/Shamima Akter (1).pdf'

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