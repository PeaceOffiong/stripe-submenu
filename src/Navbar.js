import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import {useGlobalContext} from './context'

const Navbar = () => {
  const { openSideBar, isSideBarOpen,openSubMenu, closeSubMenu } = useGlobalContext();


  const displaySubmenu = (e) => {
    const page = e.target.textContent;
    const temptBtn = e.target.getBoundingClientRect()
    const center = (temptBtn.left + temptBtn.right) / 2
    const bottom = temptBtn.bottom - 3;
    openSubMenu(page, {center, bottom})
  }
  
  const handleSumit = (e) =>{
    if (!e.target.classList.contains("link-btn")) {
      closeSubMenu()
    }
  }

  return <nav className='nav' onMouseOver={handleSumit}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" className='nav-logo' />
        <button className='btn toogle-btn' onClick={openSideBar}>
          <FaBars/>
        </button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
          products
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
          developers
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
          company
          </button>
        </li>
      </ul>
      <button className='btn signin-btn'>
        Sign in
      </button>
    </div>
  </nav>
}

export default Navbar
