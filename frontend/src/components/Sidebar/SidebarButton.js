import React from 'react'
import './SidebarButton.css'



const SidebarButton = () => {
  
  return (
    <nav class="d-flex d-md-none fixed-top justify-content-end just p-2">
        <button className="btn float-right menuIcon" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" >
            <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
    </nav>
  )
}

export default SidebarButton
