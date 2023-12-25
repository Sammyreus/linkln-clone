import React from 'react'
import './Feed.css';
import InputOptions from './InputOptions';
import { EventNote, Subscriptions,CalendarViewDay,Image,Create } from '@material-ui/icons';
export default function Feeds() {
  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <Create/>
                <form>
                    <input type="text"/>
                    <button type='submit'>Send</button>
                </form>
            </div>
            <div className="feed___inputOptions">
                <InputOptions Icon ={Image} text = "Photo" color = "#70B5F9"/>
                <InputOptions Icon ={Subscriptions} text = "Video" color = "#E7A33E"/>
                <InputOptions Icon ={EventNote} text = "Event" color = "#C0CBCD"/>
                <InputOptions Icon ={CalendarViewDay} text = "Write Article" color = "#7FC15E"/>
            </div>
        </div>
    </div>
  )
}
