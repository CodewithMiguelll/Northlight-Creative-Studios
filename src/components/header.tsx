"use client";

import Link from "next/link";
import { useState } from "react";
import { Pacifico } from "next/font/google";
import NavMenu from "@/components/nav-menu";
import { Menu, X } from "lucide-react"; // hamburger & close icons

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full shadow-md p-2.5">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className={`${pacifico.className} text-xl font-bold text-[#121212]`}
        >
          NorthLight Creative Studios
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between gap-6">
          <NavMenu />
          <div className="flex items-center gap-4">
            <Link href={"/contact"}>
              <button className="transition-all bg-purple-600 p-2.5 rounded-md font-medium text-white hover:-translate-y-1 hover:bg-[#7e57c2]">
                Contact Us
              </button>
            </Link>
            <Link href={"https://cal.com/chikaima-uwakwe-004"} target="_blank">
              <button className="transition-all p-2.5 rounded-md font-medium text-[#2196f3] border-2 border-[#2196f3] hover:bg-blue-500 hover:text-white hover:-translate-y-1">
                Book A Call
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className="text-[#121212] w-7 h-7 cursor-pointer" />
            ) : (
              <Menu className="text-[#121212] w-7 h-7 hover:cursor-pointer" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4.5">
          <NavMenu />
          <div className="flex items-center gap-6 p-0.5 justify-between">
            <Link href={"/contact"} onClick={() => setIsOpen(false)}>
              <button className="w-full bg-purple-600 p-2.5 rounded-md font-medium text-white hover:-translate-y-1 hover:bg-[#7e57c2 ">
                Contact Us
              </button>
            </Link>
            <Link
              href={"https://cal.com/chikaima-uwakwe-004"}
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              <button className="w-full transition-all p-2.5 rounded-md font-medium text-[#2196f3] border-2 border-[#2196f3]">
                Book A Call
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
