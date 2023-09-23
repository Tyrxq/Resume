import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
   const location = useLocation();


   function activeLink(link){
    return location.pathname === link ? "nav-link text-truncate d-inline-flex menu-links active-link": "nav-link text-truncate d-inline-flex menu-links";
   } 
  
  return (
    <div className="offcanvas offcanvas-start w-25 menu-header" tabindex="-1" id="offcanvas" data-bs-scroll="true" data-bs-keyboard="true" data-bs-backdrop="false" >
        <div className="offcanvas-header d-flex justify-content-end menu-header">
           
           
        </div>
        <div className="offcanvas-body px-0 menu-body">
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">

                <li className= "nav-item ">
                    <Link to="/" className= {activeLink("/")}>
                        <span class=" fs-10 material-symbols-outlined ms-1 ">house</span>
                            <span className="ms-1 d-none d-sm-inline">Home</span>
                    </Link>
                </li>
                
                <li className= "nav-item ">
                    <Link to="/resume" className={activeLink("/resume")}>
                        <span class=" fs-10 material-symbols-outlined ms-1 ">news</span>
                        <span className="ms-1 d-none d-sm-inline">Resume</span> 
                    </Link>
                </li>
            
                <li className="nav-item">
                    <Link to="/portfolio" className={activeLink("/portfolio")}>
                        <span class=" fs-10 material-symbols-outlined ms-1 ">Folder</span>
                        <span className="ms-1 d-none d-sm-inline">Portfolio</span> 
                    </Link>
                </li>
                <li className = "nav-item ">
                    <Link to="/contact"className={activeLink("/contact")}>
                        <span class=" fs-10 material-symbols-outlined ms-1 ">contact_page</span>
                        <span className="ms-1 d-none d-sm-inline">Contact</span> 
                    </Link>
                </li>
             
            </ul>
        </div>
    </div>
  )
}

export default Sidebar
