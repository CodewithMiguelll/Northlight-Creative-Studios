"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/services", label: "Services" },
  ];

  return (
    <div className="flex justify-center my-6 text-[#121212] font-medium">
      <NavigationMenu className="mx-4 flex">
        <NavigationMenuList>
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink
                  href={link.href}
                  className={`flex text-[16px] p-2.5 rounded-md transition-colors ${
                    isActive
                      ? "border-b-[#e91e62ce] border-b-6 text-[#121212]" 
                      : "hover:bg-[#7e57c2] hover:text-white"
                  }`}
                >
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
