import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
   const location = useLocation();


   function activeLink(link){
    return location.pathname === link ? "nav-link text-truncate d-inline-flex menu-links active-link": "nav-link text-truncate d-inline-flex menu-links";
   } 
  //create a new css class maxing the length of the sidebar
  //create break points for backround linear gradient 
  //rework sidebar-button
  return (
    <nav className='navbar navbar-expand-md navbar-light bg-light'> 
           
        <div className="offcanvas offcanvas-start w-25 h-100 menu-header" tabindex="-1" id="offcanvas" data-bs-scroll="true" data-bs-keyboard="true" data-bs-backdrop="false" >
            <div className="offcanvas-body px-0 menu-body">
                <ul className="navbar-nav nav-pills d-inline mb-sm-auto mb-0 align-items-start container-md" id="menu">
                    <div className='row'>
                    
                    <li className= "nav-item col">
                        <Link to="/" className= {activeLink("/")}>
                            <span class=" fs-10 material-symbols-outlined ms-1 ">house</span>
                                <span className="ms-1  d-sm-inline">Home</span>
                        </Link>
                    </li>
                    
                    <li className= "nav-item col">
                        <Link to="/resume" className={activeLink("/resume")}>
                            <span class=" fs-10 material-symbols-outlined ms-1 ">news</span>
                            <span className="ms-1  d-sm-inline">Resume</span> 
                        </Link>
                    </li>
                
                    <li className="nav-item col">
                        <Link to="/portfolio" className={activeLink("/portfolio")}>
                            <span class=" fs-10 material-symbols-outlined ms-1 ">Folder</span>
                            <span className="ms-1  d-sm-inline">Portfolio</span> 
                        </Link>
                    </li>
                    <li className = "nav-item col">
                        <Link to="/contact"className={activeLink("/contact")}>
                            <span class=" fs-10 material-symbols-outlined ms-1 ">contact_page</span>
                            <span className="ms-1 d-sm-inline">Contact</span> 
                        </Link>
                    </li>
                        
                    </div>
                    
                
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar
