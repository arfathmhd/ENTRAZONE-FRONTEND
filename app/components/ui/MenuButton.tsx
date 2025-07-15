"use client"

import { HiMenuAlt2 } from "react-icons/hi";
import React, { useState } from 'react'
import { Sidebar } from "./Sidebar";



function MenuButton() {
      const [isSidebarOpen, setIsSidebarOpen] = useState(false)

        const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
        <HiMenuAlt2 onClick={toggleSidebar} className="text-black text-2xl cursor-pointer" />

        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

    </div>
  )
}

export default MenuButton