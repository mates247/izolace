"use client";
import React, { useState } from "react";

import { navLinks } from "@/app/data/data";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

interface NavbarProps {
  offer?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ offer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between h-[60px] items-center">
      <div className="z-50">
        <h1>Izolace.cz</h1>
      </div>
      <div className="sm:flex gap-8 hidden ">
        {navLinks.map((item, index) => {
          return (
            <Link key={index} href={item.url}>
              {item.title}
            </Link>
          );
        })}
      </div>
      <div className="sm:hidden z-50 ">
        {!isOpen ? (
          <GiHamburgerMenu size={30} onClick={() => setIsOpen(true)} />
        ) : (
          <MdClose size={30} onClick={() => setIsOpen(false)} />
        )}
      </div>
      {isOpen && (
        <div
          className={`inset-0 absolute bg-black/20 backdrop-blur-sm z-20 h-[50vh] min-h-[300px] flex justify-center items-center flex-col text-white gap-8 text-2xl ${offer && "top-[40px]"}`}
        >
          {navLinks.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
