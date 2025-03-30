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
import { useNavigate } from 'react-router-dom';

const AssetTable = () => {
    const navigate = useNavigate()
    return (
        <Table>
  <TableCaption>.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Coin</TableHead>
      <TableHead>Symbol</TableHead>
      <TableHead>Volume</TableHead>
      <TableHead className="text-right">MarketCap</TableHead>
      <TableHead className="text-right">24h</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {[1,1,1,1,1,1,1,1,1].map((item, index) => <TableRow key = {index}>
      <TableCell onClick = {()=>navigate('/market/bitcoin/')} className="font-medium flex items-center gap-2">
        <Avatar className='-z-50'>
        <AvatarImage src = "https://cryptologos.cc/logos/ethereum-eth-logo.png" >
            </AvatarImage></Avatar>
            <span>Bitcoin</span></TableCell>
      <TableCell>BTC</TableCell>
      <TableCell>Total Price</TableCell>
      <TableCell>Market Cap Value</TableCell>
      <TableCell className="text-right">24H Value</TableCell>
      <TableCell className="text-right">Current Price</TableCell>
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

    )
}

export default AssetTable