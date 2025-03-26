import React from "react";
import { SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  BookmarkIcon,
  ActivityIcon,
  LayersIcon,
  UserIcon,
  LogOutIcon,
  WalletIcon,
} from "lucide-react"; // Import all icons from lucide-react
import { useNavigate } from "react-router-dom";

const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-6 w-6" /> },
  { name: "Portfolio", path: "/portfolio", icon: <LayersIcon className="h-6 w-6" /> },
  { name: "Watchlist", path: "/watchlist", icon: <BookmarkIcon className="h-6 w-6" /> },
  { name: "Activity", path: "/activity", icon: <ActivityIcon className="h-6 w-6" /> },
  { name: "Profile", path: "/profile", icon: <UserIcon className="h-6 w-6" /> },
  { name: "Wallet", path: "/wallet", icon: <WalletIcon className="h-6 w-6" /> },
  { name: "Logout", path: "/logout", icon: <LogOutIcon className="h-6 w-6" /> },
];

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full w-64 bg-gray-900 text-white p-5 space-y-4">
      {menu.map((item, index) => (
        <SheetClose asChild key={index}>
          <Button
            variant="ghost"
            className="flex items-center gap-4 w-full text-white hover:bg-gray-700"
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.name}</span>
          </Button>
        </SheetClose>
      ))}
    </div>
  );
};

export default Sidebar;
