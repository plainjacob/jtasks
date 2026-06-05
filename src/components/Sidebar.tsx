'use client';

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div className={`${isOpen ? 'w-64' : 'w-0 overflow-hidden'}`}></div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <Bars3Icon className="size-8 text-black" />
      </button>
    </div>
  )
}