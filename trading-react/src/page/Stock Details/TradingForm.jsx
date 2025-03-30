import React, { useState } from 'react'; // Added useState import
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const TradingForm = () => {
  const [orderType, setOrderType] = useState("BUY");
  
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="space-y-6 p-5">
      {/* Input Section */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4 w-full">
          <Input
            className="py-7 focus:outline-none flex-1"
            placeholder="Enter the Amount..."
            onChange={handleChange}
            type="number"
            name="amount"
          />
          <div className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
            4563
          </div>
        </div>
        
        {false && (
          <p className="text-red-600 text-center">Insufficient wallet balance to buy</p>
        )}
      </div>

      {/* Order Type Section */}
      <div className="flex items-center justify-between"> 
        <p>Order Type</p>
        <p>Market Order</p>
      </div>

      {/* Available Section */}
      <div className="flex items-center justify-between">
        <p>{orderType === "BUY" ? "Available Cash" : "Available Quantity"}</p>
        <p>{orderType === "BUY" ? 9000 : 23.08}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
      <Button 
        className={`w-full py-6 ${orderType === "SELL" ? "bg-red-600 text-white" : ""}`}
        >
        {orderType}
        </Button>
        <Button 
          variant="links" 
          className="w-full mt-5 text-xl"
          onClick={() => setOrderType(orderType === "BUY" ? "SELL" : "BUY")}
        >
          {orderType === "BUY" ? "Or Sell" : "Or Buy"}
        </Button>
      </div>

      {/* Asset Info Section */}
      <div className="flex flex-col gap-4 p-4 bg-muted rounded-lg">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage 
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
              className="w-10 h-10 object-contain"
            />
          </Avatar>
          <div className="flex items-center gap-2">
            <p className="font-medium">BTC</p>
            <X className="text-gray-400 w-4 h-4"/>
            <p className="text-gray-500">Bitcoin</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-xl font-bold">$6554</p>
          <p className="text-red-600">
            <span>-1319049822.578</span>
            <span> (-0.30%)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradingForm;