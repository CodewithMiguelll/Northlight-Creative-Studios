"use client";

import Link from "next/link";
import { Pacifico } from "next/font/google";
import { Button } from "@/components/ui/button";
import NavMenu from "@/components/nav-menu";

const pacifico = Pacifico({ 
  variable: "--font-pacifico",
  subsets: ["latin"], 
  weight: "400" });

export default function Header() {
  return (
    <header className="w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className={`${pacifico.className} text-xl font-bold text-white`}>
          NorthLight Creative
        </Link>

        <NavMenu />

        <div className="flex items-center gap-4">
          <Link href={"/contact"}>
            <Button
              className="transition-all md:hover:cursor-pointer hover:translate-y-1 bg-[#fffaf5] md:hover:bg-[#ffffff] hover:shadow-2xl hover:shadow-white md:hover:text-[#121212] text-[#121212] "
              color="#ffffff"
            >
              Contact Us
            </Button>
          </Link>

          <Link href={"https://cal.com/chikaima-uwakwe-004"} target="_blank">
            <Button className="bg-[#7b8650af]  transition md:hover:cursor-pointer hover:bg-[#7b8650] hover:text-[#fafafa] text-[#121212]">
              Book A Call
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
