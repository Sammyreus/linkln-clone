import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
function HeaderOption({avatar, Icon, title}) {
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className='HeaderOption__Icon' />}
        {avatar && <Avatar className='HeaderOption__Icon' src={avatar} />}
        <h3>{title}</h3>
    </div>
  )
}

export default HeaderOption

