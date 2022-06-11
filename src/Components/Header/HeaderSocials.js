import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
      <Link to="https://www.linkedin.com/notifications/" target="_blank" ><BsLinkedin/></Link>
      <Link to="https://www.facebook.com/nizum.nizum.1481/" target="_blank" ><BsFacebook/></Link>
      <Link to="https://github.com/Nijumdip" target="_blank" ><BsGithub/></Link>
      </div>
  )
}

export default HeaderSocials;