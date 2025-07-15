"use client"

import { Bell } from 'lucide-react'
import React, { useState } from 'react'
import NotificationModal from './NotificationModal';
import { Popover, PopoverTrigger } from './popover';

function NotificationButton() {
  const [open, setOpen] = useState(false);
    
  return (
    <div className="bg-white p-2 shadow-md rounded-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
            <Bell className="text-black text-xl w-5 h-5" />
        </PopoverTrigger>
          <NotificationModal isOpen={open} setIsOpen={setOpen} />
      </Popover>
    </div>
  )
}

export default NotificationButton