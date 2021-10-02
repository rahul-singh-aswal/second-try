import React, { useState } from "react";
import "./Navbar.css";
import {SidebarData} from "./Sidebar";

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [sidebar, setSidebar]= useState(false);
  const showsidebar = () => setSidebar(!sidebar);
  return (
    <>
  
        {/* Sidebar v1 */}
        <div className="navbar">
        <Link to="#" className="navbar">
        <  img src="https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png"  onClick = {showsidebar} width="10%" />
        </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className= 'nav-menu-items'>
        <li className = "nav-toggle">
        <Link to="#" className ="menu-bars">
        
           <img src="https://1462_mobior-baefoot-resort-vacations-hamburger-menu.png"  alt="×" width="10%" />
        </Link> </li>
        {SidebarData.map((item,index) => {
        	return (
        <li key={index} className={item.cName} >
        <Link to={item.path}>
        {item.icon}
        <span>{item.title}</span>
        </Link>
        </li>
        );
        })}
        
        </ul>
</nav>
<nav>
        

        {/* 2nd menu part  */}
        <div
          >
          <ul>
            <li>
              <NavLink to="#">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
            
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">FACEBOOK
<i className="fas fa-dragon">Dragon</i>
                <img src="https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png"  width="10%"  alt= "fb" className="facebook" />
              </a>
            </li>
            <li>
            <i className="fas fa-band-aid">djudbdn</i>
<i className="fas fa-cat">jdsjbdn</i>
<i className="fas fa-dragon">hd in nr </i>
<i className="far fa-clock">bdhdndm</i>
<i className="fas fa-clock">bdudndnr</i>
</li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">Instagram
                <img src="https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png"  width="10%"  alt= "fb" className="facebook" />
              
                   </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">YouTube
                <img src="https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png"  width="10%"  alt= "fb" className="facebook" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" 
>
            <img src="https://www.pngkey.com/png/full/332-3321462_mobile-menu-for-barefoot-resort-vacations-hamburger-menu.png"  width="10%"  alt= "fb" className="facebook" />
              
             
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;