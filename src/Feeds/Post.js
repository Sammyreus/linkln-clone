import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Post.css';
import InputOptions from './InputOptions';
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
export default function Post({name, description, message,photoUrl}) {
  

  return (
    <div className='post'>
    <div className='post__header'>
        <Avatar/>
        <div className='post__info'>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    </div>
    <div className='post__body'>
        <p>{message}</p>
        </div>
    <div className='post__buttons'>
        <InputOptions Icon={ThumbUpAltOutlined} text ="Like" color="gray"/>
        <InputOptions Icon={ChatOutlined} text ="Comment" color="gray"/>
        <InputOptions Icon={ShareOutlined} text ="Share" color="gray"/>
        <InputOptions Icon={SendOutlined} text ="send" color="gray"/>
        
    </div>
    </div>
  )
}
