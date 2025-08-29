"use client";

import Link from "next/link";
import { useState } from "react";
import { Pacifico } from "next/font/google";
import { Button } from "@/components/ui/button";
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
          className={`${pacifico.className} text-xl font-bold text-white`}
        >
          NorthLight Creative Studios
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between gap-6">
          <NavMenu />
          <div className="flex items-center gap-4">
            <Link href={"/contact"}>
              <Button className="transition-all hover:translate-y-1 bg-[#fffaf5] hover:bg-[#ffffff] hover:shadow-2xl hover:shadow-white hover:text-[#121212] text-[#121212]">
                Contact Us
              </Button>
            </Link>
            <Link href={"https://cal.com/chikaima-uwakwe-004"} target="_blank">
              <Button className="bg-[#7b8650af] transition hover:bg-[#7b8650] hover:text-[#fafafa] text-[#121212]">
                Book A Call
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className="text-white w-7 h-7 cursor-pointer" />
            ) : (
              <Menu className="text-white w-7 h-7 hover:cursor-pointer" />
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
              <Button className="w-full bg-[#fffaf5] text-[#121212] hover:bg-[#e9dac1] hover:text-[#121212]">
                Contact Us
              </Button>
            </Link>
            <Link
              href={"https://cal.com/chikaima-uwakwe-004"}
              target="_blank"
              onClick={() => setIsOpen(false)}
            >
              <Button className="w-full bg-[#7b8650af] text-[#121212] hover:bg-[#7b8650] hover:text-[#fafafa]">
                Book A Call
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
