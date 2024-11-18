import React, { useEffect, useState } from 'react';
import {HashLink} from 'react-router-hash-link';
import {useLocation} from 'react-router-dom'
import './Navbar.css';

const Sidebar = ({homeRef,contactRef,portfolioRef,resumeRef}) => {
   const location = useLocation();
   
   const linkLocation = {'/':0,'/#home':0, '/#resume':1,'/#portfolio':2,'/#contact':3 }
   
   const [activeLink,setActiveLink] = useState(linkLocation[location.pathname + location.hash]);
   const [userScrolling,setUserScrolling] = useState(true);
   const links = [
    {
        id:0,
        link:'/#home',
        icon:'house',
        word:'Home'
    },
    {
        id:1,
        link:'/#resume',
        icon:'news',
        word:'Resume'
    },
    {
        id:2,
        link:'/#portfolio',
        icon:'folder',
        word:'Portfolio'
    },
    {
        id:3,
        link:'/#contact',
        icon:'contact_page',
        word:'Contact'
    }
    ];
    const scrollWithOffset = (el) => {
      const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
      let yOffset = 0; 
      if(el.id === 'home'){
       yOffset = -1000
      }
      window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }
  

   const locationName = location.hash.slice(1);
   
   const [navbarScroll,setNavbarScroll] = useState(locationName === ''? 'home-link' :`${locationName}-link`);

    useEffect( () => {

      const linkLocations = {'/':0,'/#home':0, '/#resume':1,'/#portfolio':2,'/#contact':3 }
      let observerRefValues = [null,null,null,null]; 

      const timeoutId = setTimeout(() => {
        setUserScrolling(true);
      }, 500); 

      const observer = new IntersectionObserver(
        ([entry]) => {
          //if element comes into viw of screen
          if(entry.isIntersecting){
            //sets the the id number of the active link by the targeted element's id
            setActiveLink(linkLocations[`${location.pathname}#${entry.target.id}`]);
            //sets the css class for the navbar scroll by the targeted element's id
            setNavbarScroll(`${entry.target.id}-link`);
          }
          
        },
        {
          threshold:1 // Adjust this value to control when the element is considered visible
        }
      );
      // if scrolling
      const handleScroll = () => {
       
        if(userScrolling){
          if (homeRef.current) {
            observer.observe(homeRef.current);
            observerRefValues[0] = homeRef.current
          }
          if(contactRef.current){
            observer.observe(contactRef.current);
            observerRefValues[1] = contactRef.current
          }
          if(portfolioRef.current){
            observer.observe(portfolioRef.current);
            observerRefValues[2] = portfolioRef.current
          }
          if(resumeRef.current){
            observer.observe(resumeRef.current);
            observerRefValues[3] = resumeRef.current
          }
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
        
        if (observerRefValues[0]) {    
          observer.unobserve(observerRefValues[0]);
        }
        if(observerRefValues[1]){
            observer.unobserve(observerRefValues[1]);
        }
        if(observerRefValues[2]){
          observer.unobserve(observerRefValues[2]);
        }
        if(observerRefValues[3]){
          observer.unobserve(observerRefValues[3]);
        }
      };


    },[navbarScroll,contactRef,homeRef,userScrolling,portfolioRef,resumeRef,location])


 
   
   
   const linkComponent = 
    links.map(({id,link,icon,word}) => { 
        const cssCLasses = activeLink > id ? `${activeLinkMobile(link)} absorbed-link` : `${activeLinkMobile(link)}`;
     
        return(
            <li className= "nav-item col" key={id}>
                <HashLink to={link} className= {cssCLasses} onClick={() =>scrollNavbar(link,id)} scroll={el => scrollWithOffset(el)}>
                    <span class=" fs-10 material-symbols-outlined ms-1 ">{icon}</span>
                    <span className="ms-1  d-sm-inline">{word}</span>
                </HashLink>
            </li>
        )
    });                     
    

   function activeLinkMobile(link){
    return links[activeLink].link === link ? "nav-link text-truncate d-inline-flex menu-links active-link": "nav-link text-truncate d-inline-flex menu-links";
   } 

   function scrollNavbar(link,id){
    const linkHash = link.slice(2);
    setActiveLink(id);
    setNavbarScroll(`${linkHash}-link`)
    setUserScrolling(false);
   }

  return (
    <nav className='navbar fixed-top navbar-expand-md sidebar'> 
           
        <div className="offcanvas offcanvas-start w-25 h-100 menu-header rounded-pill" tabindex="-1" id="offcanvas" data-bs-scroll="true" data-bs-keyboard="true" data-bs-backdrop="false" >
            <div class="offcanvas-header justify-content-end">
                <button type="button" class="btn-close btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div className={`offcanvas-body px-0 menu-body ${navbarScroll} rounded-pill`}>
                <ul className="navbar-nav nav-pills d-inline mb-sm-auto mb-0 align-items-start container-fluid ps-4" id="menu ">
                    <div className='row '>  
                        {linkComponent} 
                    </div>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Sidebar
