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

const Activity = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">Your Activity</h1>
             <Table className="border">
  <TableCaption>.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="py-5">Date & Time</TableHead>
      <TableHead>Trading Pair</TableHead>
      <TableHead>Buy Price</TableHead>
      <TableHead>Selling Price</TableHead>
      <TableHead>Order Type</TableHead>
      <TableHead className="">P&L</TableHead>
      <TableHead className="text-right">Value</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1,1,1,1].map((item, index) => <TableRow key = {index}>
    <TableCell>
      <p>
        24/03/2025
      </p>
      <p className="text-gray-400">
          1:04:32
      </p>
    </TableCell>
      <TableCell className="font-medium flex items-center gap-2">
        <Avatar className='-z-50'>
        <AvatarImage src = "">
            </AvatarImage></Avatar>
            <span>Bitcoin</span></TableCell>
      <TableCell className="">$69249</TableCell>
      <TableCell>1364758938795</TableCell>
      <TableCell>-0.200009</TableCell>
      <TableCell className="">$69249</TableCell>
      <TableCell className="text-right">
        345
      </TableCell>
    </TableRow>)}

  </TableBody>
</Table>
    </div>
  )
}

export default Activity