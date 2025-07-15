"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown-menu";
import { Button } from "./Button";
import { FaAngleDown } from "react-icons/fa";

export function DropdownMenuCheckboxes() {
  const [selectedCourse, setSelectedCourse] = React.useState<string>("SSLC");


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size='lg' className="flex gap-9">
          My course{" "}
          <span className="flex items-center gap-1">
            {selectedCourse}
            <FaAngleDown className="text-black text-xs md:block hidden" />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select Course</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={selectedCourse === "SSLC"}
          onCheckedChange={(checked) => checked && setSelectedCourse("SSLC")}
        >
          SSLC
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCourse === "HSC"}
          onCheckedChange={(checked) => checked && setSelectedCourse("HSC")}
        >
          HSC
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={selectedCourse === "Degree"}
          onCheckedChange={(checked) => checked && setSelectedCourse("Degree")}
        >
          Degree
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
