import React from 'react';
import CTA from './CTA';
import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Shamima Akter</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA></CTA>
      </div>
    </header>
  )
}

export default Header