import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import logo from "@/assets/logo2.png";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky top-0 left-0 right-0 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger>
            <button className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
              <Menu className="h-7 w-7" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-72 flex flex-col justify-center" side="left">
            <SheetHeader>
              <SheetTitle>
                <div className="text-3xl flex justify-center items-center gap-2">
                  <Avatar>
                    <AvatarImage src={logo} />
                  </Avatar>
                  <div>
                    <span className="font-bold text-orange-700">Crypto</span>
                    <span>Edge</span>
                  </div>
                </div>
              </SheetTitle>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
