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

const Withdrawal = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">Withdrawal</h1>
             <Table className="border">
  <TableCaption>.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="py-5">Date</TableHead>
      <TableHead>Method</TableHead>
      <TableHead>Amount</TableHead>
      <TableHead className="text-right">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1,1,1,1].map((item, index) => <TableRow key = {index}>
    <TableCell>
      <p>
        May 30,2025
      </p>
      
    </TableCell>
      
      <TableCell className="">Bank</TableCell>
      <TableCell>123456</TableCell>
      <TableCell className="text-right">
        345
      </TableCell>
    </TableRow>)}

  </TableBody>
</Table>
    </div>
  )
}

export default Withdrawal