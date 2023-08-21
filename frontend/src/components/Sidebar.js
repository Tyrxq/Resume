import React from 'react'
import { Link,useParams } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
   let { id } = useParams();
  
  return (
    <div className="offcanvas offcanvas-start w-25" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
        <div className="offcanvas-header d-flex justify-content-end">
           
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body px-0 menu-body">
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">

                <li className= "nav-item active-link">
                    <Link to="/" className= "nav-link text-truncate d-inline-flex menu-links active-link">
                        <span class=" fs-10 material-symbols-outlined ms-1 ">house</span>
                            <span className="ms-1 d-none d-sm-inline">Home</span>
                    </Link>
                </li>
                
                <li>
                    <Link to="/resume" className="nav-link text-truncate d-inline-flex menu-links ">
                        <span class=" fs-10 material-symbols-outlined ms-1 ">news</span>
                        <span className="ms-1 d-none d-sm-inline">Resume</span> 
                    </Link>
                </li>
            
                <li className="dropdown">
                    <Link to="/"className="nav-link dropdown-toggle  text-truncate d-inline-flex menu-links" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <span class=" fs-10 material-symbols-outlined ms-1 ">Folder</span>
                        <span className="ms-1 d-none d-sm-inline">Portfolio</span> 
                    </Link>
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                        <li><a className="dropdown-item" href="/#">New project...</a></li>
                        <li><a className="dropdown-item" href="/#">Settings</a></li>
                        <li><a className="dropdown-item" href="/#">Profile</a></li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><a className="dropdown-item" href="/#">Sign out</a></li>
                    </ul>
                </li>
                <li>
                    <Link to="/"className="nav-link text-truncate d-inline-flex menu-links ">
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
