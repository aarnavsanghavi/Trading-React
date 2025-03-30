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
  CreditCardIcon,
  ArrowDownIcon,
  ClockIcon,
  CloudIcon,
} from "lucide-react";
import { useNavigate } from "react-router-dom";


const menu = [
  { name: "Home", path: "/", icon: <HomeIcon className="h-5 w-5" /> },
  { name: "Portfolio", path: "/portfolio", icon: <LayersIcon className="h-5 w-5" /> },
  { name: "Watchlist", path: "/watchlist", icon: <BookmarkIcon className="h-5 w-5" /> },
  { name: "Activity", path: "/activity", icon: <ActivityIcon className="h-5 w-5" /> },
  { name: "Wallet", path: "/wallet", icon: <WalletIcon className="h-5 w-5" /> },
  { name: "Payment Details", path: "/payment-details", icon: <CreditCardIcon className="h-5 w-5" /> },
  { name: "Withdrawal", path: "/withdrawal", icon: <ArrowDownIcon className="h-5 w-5" /> },
  { name: "Profile", path: "/profile", icon: <UserIcon className="h-5 w-5" /> },
  { name: "Logout", path: "/logout", icon: <LogOutIcon className="h-5 w-5" /> },
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
