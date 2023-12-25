import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css';
import image from '../assets/neom-AdkJ-LgpTrE-unsplash.jpg';

function Sidebar() {

  const RecentItem=(items)=> {
    <div className='Sidebar__Items'>
    <span className='Sidebar__hash'>#</span>
    <p>{items}</p>
  </div>  
  };

  return (
    <div className='Sidebar'>
       <div className='Sidebar__Top'>
            <img src={image} alt=''/>
            <Avatar className='Sidebar__Avatar'/>
            <h2>Sammy Reus</h2>
            <h4>soumyanandy62@gmail.com</h4>
       </div>
       <div className='Sidebar__Middle'>
        <div className='Sidebar__Stats'>
            <p>Who viewed you</p>
            <p className='Sidebar__Numberstats'>2,678</p>
        </div>
        
        <div className='Sidebar__Stats'>
            <p>Who viewed you</p>
            <p className='Sidebar__Numberstats'>2,678</p>
       </div>
       </div>
       <div className='Sidebar__Bottom'>
        <p>Recent</p>
        {RecentItem("reactsjs")}
        {RecentItem('fullstack')}
        {RecentItem('docker')}
       </div>
    </div>
    
  )
}

export default Sidebar