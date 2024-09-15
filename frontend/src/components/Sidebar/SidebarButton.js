import React from 'react'
import './SidebarButton.css'
import { useState } from 'react';


const SidebarButton = () => {
    

    const [sidebar,handleSidebar] = useState(false);

  return (
    <nav class="d-flex d-md-none fixed-top justify-content-end just p-2">
        <button className="btn float-right menuIcon" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" onClick={() => handleSidebar(!sidebar)} >
            <span className="material-symbols-outlined">{sidebar? "arrow_back_ios_new": "arrow_forward_ios"}</span>
        </button>
    </nav>
  )
}

export default SidebarButton
