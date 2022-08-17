import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();
export const AppProvider = ({ children }) => {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'', links:[]})

    const openSideBar = () => {
        setIsSideBarOpen(true); 
    }

    const openSubMenu = (text, coordinates) => {
        setLocation(coordinates)
        const page = sublinks.find((link) => link.page === text);
        setPage(page)
        setIsSubMenuOpen(true); 
    }

    const closeSubMenu = () => {
        setIsSubMenuOpen(false);
    }

    const closeSideBar = () => {
        setIsSideBarOpen(false);
    }


    return <AppContext.Provider
        value={{
            isSubMenuOpen,
            isSideBarOpen,
            openSubMenu,
            closeSubMenu,
            openSideBar,
            closeSideBar,
            location,
            page,
        }}>{ children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}