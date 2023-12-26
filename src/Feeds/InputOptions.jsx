import React from 'react'
import './InputOptions.css'

export default function InputOptions({Icon, text, color}) {
  return (
    <div className='InputOptionsIcon'>
        <Icon style ={{color:color}}/>
        <h4>{text}</h4>
    </div>
  )
}
