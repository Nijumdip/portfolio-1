import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
      <div className='header__socials'>
      <a href="https://www.linkedin.com/notifications/" target="_blank" ><BsLinkedin/></a>
      <a href="https://www.facebook.com/nizum.nizum.1481/" target="_blank" ><BsFacebook/></a>
      <a href="https://github.com/Nijumdip" target="_blank" ><BsGithub/></a>
      </div>
  )
}

export default HeaderSocials;