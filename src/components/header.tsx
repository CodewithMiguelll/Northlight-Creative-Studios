"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavMenu from "@/components/nav-menu";

export default function Header() {
  return (
    <header className="w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          NC
        </Link>

        <NavMenu />

        <div className="flex items-center gap-4">
          <Button color="#ffffff">Sign in</Button>
          <Button className="bg-[#9ca3af]">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
