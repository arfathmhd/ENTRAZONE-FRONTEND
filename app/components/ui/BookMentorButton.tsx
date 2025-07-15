"use client";

import React, { useState } from "react";
import { Users, ChevronDown } from "lucide-react";
import { DropdownMenuItem } from "../ui/Dropdown-menu";
import BookMentorModal from "./BookMentorModal";

function BookMentorButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <DropdownMenuItem
        className="flex items-center justify-between py-3 px-4 cursor-pointer"
        onClick={(e) => {
          e.preventDefault(); 
          e.stopPropagation(); 
          setOpen(true);
        }}
      >
        <div className="flex items-center gap-3">
          <Users className="w-4 h-4 text-gray-600" />
          <span className="text-sm">Book a Mentor</span>
        </div>
        <ChevronDown className="w-3 h-3 text-gray-400 rotate-[-90deg]" />
      </DropdownMenuItem>

      <BookMentorModal isOpen={open} setIsOpen={setOpen} />
    </>
  );
}
export default BookMentorButton;
