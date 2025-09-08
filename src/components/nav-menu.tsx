import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <div className="flex justify-center my-6 text-[#121212] font-medium">
      <NavigationMenu className="mx-4 flex">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex text-[16px] hover:bg-[#f3f4f6]"
              href="/about"
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex text-[16px] hover:bg-[#f3f4f6]"
              href="/projects"
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className="flex text-[16px] hover:bg-[#f3f4f6]"
              href="/services"
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default Navigation;
