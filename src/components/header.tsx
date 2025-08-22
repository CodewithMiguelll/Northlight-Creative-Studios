"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import NavMenu from "@/components/nav-menu";

export default function Header() {
  return (
    <header className="w-full border-b bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyLogo
        </Link>

        <NavMenu />

        <div className="flex items-center gap-4">
          <Button variant="outline">Sign in</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}
