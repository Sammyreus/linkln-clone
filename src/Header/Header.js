import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import Icon from '@material-ui/icons/LinkedIn';
import HeaderOption from "./HeaderOption";
import HomeIcom from '@material-ui/icons/Home';
import NetworkIcon from '@material-ui/icons/SupervisorAccount';
import { BusinessCenter } from "@material-ui/icons";
import { Chat } from "@material-ui/icons";
import { Notifications } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";

function Header(){
    return (
        <div className="Header">
          <div className="Header__left">
            <Icon/>
              <div className="HeaderSearch">
                <SearchIcon/>
                <input type="text"/>
              </div>
          </div>
          <div className="Header__right">
            <HeaderOption Icon={HomeIcom} title="Home" />
            <HeaderOption Icon={NetworkIcon} title="My Network"/>
            <HeaderOption Icon={BusinessCenter} title="Jobs" />
            <HeaderOption Icon={Chat} title="Messages"/>
            <HeaderOption Icon={Notifications} title="Notifications"/>
             <HeaderOption Avatar={Avatar} /> 
          </div>
        </div>
    )
}
export default Header;