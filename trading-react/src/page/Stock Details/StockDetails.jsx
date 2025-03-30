import React from 'react'
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Dot, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BookmarkIcon, BookmarkFilledIcon } from '@radix-ui/react-icons';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TradingForm from './TradingForm';
import StockChart from "../Home/StockChart";

const StockDetails = () => {
  return (
    <div className='p-5 mt-5 text-foreground bg-background'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-5 items-center'>
          <Avatar>
            <AvatarImage 
              src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
              className="w-12 h-12 object-contain"
            />
          </Avatar>   
        </div>
        <div className='flex items-center gap-2'>
          <p>BTC</p>
          <X className='text-gray-400'/>
          <p className='text-gray-400'>Bitcoin</p>
        </div>
        <div className='flex items-end gap-2'>
          <p className='text-xl font-bold'>$6554</p>
          <p className='text-red-600'>
            <span>-1319049822.578</span>
            <span>(-0.29803%)</span>
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <Button>
            {true ? (<BookmarkFilledIcon className = "h-6 w-6"/>) :
            (<BookmarkIcon className='h-6 w-6'/>)}
          </Button>
          <Dialog>
          <DialogTrigger asChild>
            <Button className="lg">Trade</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How much do you want to spend?</DialogTitle>
            </DialogHeader>
            <TradingForm/>
          </DialogContent>
        </Dialog>

        </div>
      </div>
      <div className='mt-14'>
      <StockChart/>
      </div>
      {/* Add your charts/tables here when ready */}
      {/* <StockChart /> */}
      {/* <AssetTable /> */}
    </div>
  )
}

export default StockDetails