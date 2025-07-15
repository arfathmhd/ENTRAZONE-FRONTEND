import React from "react";
import MenuButton from "../ui/MenuButton";
import {  User, ChevronDown, Info, Shield, FileText, Star } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/Dropdown-menu";
import BookMentorButton from "../ui/BookMentorButton";
import SearchButton from "../ui/SearchButton";
import NotificationButton from "../ui/NotificationButton";



function Header() {
  return (
    <header className="bg-[#F4F4F4] border-b border-gray-200 px-2 py-3 sticky top-0 z-50">
      <div className="flex items-center justify-between mx-2 md:mx-9">
        <div>
          <MenuButton />
        </div>

        <div className="flex items-center space-x-3">
           <SearchButton/>
           <NotificationButton/>


          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="bg-white shadow-md rounded-full flex items-center gap-2 md:gap-3 cursor-pointer hover:shadow-lg transition-shadow px-2 md:px-0">
                <div className="bg-white p-2 shadow-md rounded-full border border-gray-100">
                  <User className="text-black w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="hidden sm:flex flex-col items-start text-xs">
                  <h1 className="font-semibold text-black">Ibrahim</h1>
                  <span className="text-gray-500">ibrahim@gmail.com</span>
                </div>
                <ChevronDown className="text-black hidden sm:block mr-2 w-3 h-3" />
              </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-56 mt-2">
              <DropdownMenuItem className="flex items-center justify-between py-3 px-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Info className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">About us</span>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400 rotate-[-90deg]" />
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center justify-between py-3 px-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">Privacy policy</span>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400 rotate-[-90deg]" />
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center justify-between py-3 px-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">Terms & Conditions</span>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400 rotate-[-90deg]" />
              </DropdownMenuItem>

              <BookMentorButton />

              <DropdownMenuItem className="flex items-center justify-between py-3 px-4 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Star className="w-4 h-4 text-gray-600" />
                  <span className="text-sm">Rate this app</span>
                </div>
                <ChevronDown className="w-3 h-3 text-gray-400 rotate-[-90deg]" />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;
