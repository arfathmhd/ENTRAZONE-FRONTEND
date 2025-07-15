"use client"
import React, { useState } from "react";
import { Search } from "lucide-react";
import SearchModal from "./SearchModal";

function SearchButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white p-2 shadow-md rounded-full">
      <Search
        className="text-black text-xl w-5 h-5"
        onClick={(e) => {
          setOpen(true);
        }}
      />
    <SearchModal isOpen={open} setIsOpen={setOpen} />

    </div>
  );
}

export default SearchButton;
