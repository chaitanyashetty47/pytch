"use client";
import { IconMenu2 } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

type NavbarProps = {
  onJoinClick?: (tab: "startup" | "investor") => void;
};

export const Navbar = ({ onJoinClick }: NavbarProps) => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const [open, setOpen] = useState(false);
  return (
    
      <div className="flex relative md:rounded-full z-30 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 justify-between items-center sm:mt-12 md:mt-4 max-w-4xl mx-auto px-2 py-2 md:shadow-aceternity">
        <Image
          src="/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="hidden md:flex items-center gap-4 text-sm text-zinc-400 mr-10 ">
          {links.map((link, index) => (
            <Link
              className="hover:text-white transition-colors duration-200"
              href={link.href}
              key={index}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <IconMenu2 />
        </button>
        <div className="hidden md:block">
          <button
            onClick={() => onJoinClick?.("startup")}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-pytch-cta transition-all duration-200 hover:shadow-pytch-cta-hover hover:scale-105 active:scale-95 active:shadow-pytch-cta-active"
          >
            Join Now
          </button>
        </div>
        {open && (
          <div className="absolute md:hidden inset-x-0 bg-zinc-900/95 backdrop-blur-sm border border-zinc-800 rounded-md shadow-aceternity top-16 max-w-[95%] mx-auto">
            <div className="flex flex-col items-start gap-4 text-sm text-zinc-400 p-4">
              {links.map((link, index) => (
                <Link
                  className="hover:text-white transition-colors duration-200"
                  href={link.href}
                  key={index}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  setOpen(false);
                  onJoinClick?.("startup");
                }}
                className="w-full rounded-full bg-primary px-4 py-2 font-semibold text-primary-foreground shadow-pytch-cta transition-all duration-200 hover:shadow-pytch-cta-hover active:scale-95 active:shadow-pytch-cta-active"
              >
                Join Now
              </button>
            </div>
          </div>
        )}
      </div>
 
  );
}