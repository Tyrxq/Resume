import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
   const location = useLocation();
   const links = [
    {
        id:0,
        link:'/',
        icon:'house',
        word:'Home'
    },
    {
        id:1,
        link:'/resume',
        icon:'news',
        word:'Resume'
    },
    {
        id:2,
        link:'/portfolio',
        icon:'folder',
        word:'Portfolio'
    },
    {
        id:3,
        link:'/contact',
        icon:'contact_page',
        word:'Contact'
    }
    ];
   const [activeLink,setActiveLink] = useState(0);
   
   const linkComponent = 
    links.map(({id,link,icon,word}) => { 
        const cssCLasses = activeLink > id ? `${activeLinkMobile(link)} absorbed-link` : `${activeLinkMobile(link)}`;
        return(
            <li className= "nav-item col" key={id}>
                <Link to={link} className= {cssCLasses} onClick={() =>setActiveLink(id)}>
                    <span class=" fs-10 material-symbols-outlined ms-1 ">{icon}</span>
                    <span className="ms-1  d-sm-inline">{word}</span>
                </Link>
            </li>
        )
    });                     
    

   function activeLinkMobile(link){
    return location.pathname === link ? "nav-link text-truncate d-inline-flex menu-links active-link": "nav-link text-truncate d-inline-flex menu-links";
   } 

   function activeLinkPC(){
    const locationName = location.pathname.slice(1);
    return locationName === '/'? 'home-link' :`${locationName}-link`; 
   } 
  //create a new css class maxing the length of the sidebar
  //create break points for backround linear gradient 
  //rework sidebar-button
  return (
    <nav className='navbar fixed-top navbar-expand-md sidebar'> 
           
        <div className="offcanvas offcanvas-start w-25 h-100 menu-header rounded-pill" tabindex="-1" id="offcanvas" data-bs-scroll="true" data-bs-keyboard="true" data-bs-backdrop="false" >
            <div className={`offcanvas-body px-0 menu-body ${activeLinkPC()} rounded-pill`}>
                <ul className="navbar-nav nav-pills d-inline mb-sm-auto mb-0 align-items-start container-md" id="menu ">
                    <div className='row'>  
                        {linkComponent} 
                    </div>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar
