import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
  import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"; 
  import { Button } from "@/components/ui/button";
import { BookmarkFilledIcon } from '@radix-ui/react-icons';

const WatchList = () => {

  const handleRemoveToWatchList=(value) =>{
    console.log(value)
  }
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">WatchList</h1>
             <Table className="border">
  <TableCaption>.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="py-5">Coin</TableHead>
      <TableHead>Symbol</TableHead>
      <TableHead>Volume</TableHead>
      <TableHead>Market Cap</TableHead>
      <TableHead>24h</TableHead>
      <TableHead className="">Price</TableHead>
      <TableHead className="text-right text-red-600">Remove</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1,1,1,1].map((item, index) => <TableRow key = {index}>
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar className='-z-50'>
        <AvatarImage src = "">
            </AvatarImage></Avatar>
            <span>Bitcoin</span></TableCell>
      <TableCell>BTC</TableCell>
      <TableCell>9122354665</TableCell>
      <TableCell>1364758938795</TableCell>
      <TableCell>-0.200009</TableCell>
      <TableCell className="">$69249</TableCell>
      <TableCell className="text-right">
        <Button variant="ghost" onClick={() => handleRemoveToWatchList(item.id)} size="icon" className="h-10 w-10">
          <BookmarkFilledIcon className= "w-6 h-6"/>
        </Button>
      </TableCell>
    </TableRow>)}
    <TableRow>
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar className='-z-50'>
        <AvatarImage src = "">
            </AvatarImage></Avatar>
            <span>Bitcoin</span></TableCell>
      <TableCell>BTC</TableCell>
      <TableCell>Total Price</TableCell>
      <TableCell>Market Cap Value</TableCell>
      <TableCell className="text-right">24H Value</TableCell>
      <TableCell className="text-right">Current Price</TableCell>
    </TableRow>
  </TableBody>
</Table>
    </div>
  )
}

export default WatchList