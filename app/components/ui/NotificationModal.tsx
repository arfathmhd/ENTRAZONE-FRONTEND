"use client";

import React from "react";
import { PopoverContent } from "./popover";
import Image from "next/image";
import logo from "../../assets/WhatsApp Image 2025-07-14 at 20.07.11.jpeg"

function NotificationModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const notifications = [
    {
      title: "Finance Live Class",
      description: "Finance live class for november 23rd is...",
      time: "2:45 PM",
    },
    {
      title: "Finance Webinar",
      description: "Join our marketing webinar to lear...",
      time: "3:30 PM",
    },
    {
      title: "Inventory count errors",
      description: "Enhance your product developme...",
      time: "10:00 AM",
    },
    {
      title: "Seminar",
      description: "Explore the power of design thinki...",
      time: "1:15 PM",
    },
    {
      title: "Leadership Panel Discussion",
      description: "Hear from industry leaders in our...",
      time: "4:45 PM",
    },
    {
      title: "Technology Conference",
      description: "Discover the future of technology...",
      time: "9:30 AM",
    },
  ];
  return (
    <PopoverContent className="w-full sm:w-80 p-0 max-h-[80vh] overflow-y-auto" align="end">
      <div className="py-2">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0 border-gray-100"
          >
            {/* Logo Image */}
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src={logo}
                alt={`${notification.title} logo`}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            
            {/* Notification Content */}
            <div className="flex-grow min-w-0"> {/* min-w-0 enables text overflow */}
              <p className="font-medium text-sm text-gray-800 break-words">
                {notification.title}
              </p>
              <p className="text-xs text-gray-500 break-words">
                {notification.description}
              </p>
            </div>
            
            {/* Time */}
            <span className="text-xs text-gray-400 flex-shrink-0 whitespace-nowrap ml-2">
              {notification.time}
            </span>
          </div>
        ))}
      </div>
    </PopoverContent>
  );
}

export default NotificationModal;
