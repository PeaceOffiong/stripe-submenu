import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {isSideBarOpen, closeSideBar} = useGlobalContext()
  return <div className={`sidebar-wrapper ${isSideBarOpen && "show"}`}>
    <aside className="sidebar">
      <button className="close-btn" onClick={closeSideBar}>
        <FaTimes/>
      </button>
      <div className="sidebar-links">
        {sublinks.map((item, index) => {
          const { links, page } = item;
          return <article key={index}>
            <h4>{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((link, index) => {
                const { url, icon, label } = link;
                return <a href={url}>{icon}{ label}</a>
              })}
            </div>
          </article>
        })}
      </div>
    </aside>
  </div>
}

export default Sidebar
