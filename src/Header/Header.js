import React from "react";
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';

function Header(){
    return (
        <div className="Header">
          <div className="Header__left">
            <img src='../../../public/images.png'alt=""></img>
              <div className="HeaderSearch">
                <SearchIcon/>
                <input type=""/>
              </div>
          </div>
          
          <div className="Header_middle">

          </div>
          <div className="Header__right">

          </div>
        </div>
    )
}
export default Header;