import React, { useEffect } from 'react'
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
import { useDispatch } from 'react-redux';


const AssetTable = ({coin,category}) => {
    const dispatch = useDispatch()
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
    {coin.map((item, index) => <TableRow key = {item.id}>
      <TableCell onClick = {()=>navigate('/market/bitcoin/')} className="font-medium flex items-center gap-2">
        <Avatar className='-z-50'>
        <AvatarImage src = {item.image}>
            </AvatarImage></Avatar>
            <span>{item.name}</span></TableCell>
      <TableCell>{item.symbol}</TableCell>
      <TableCell>{item.total_volume}</TableCell>
      <TableCell>{item.market_cap}</TableCell>
      <TableCell className="text-right">{item.price_change_percentage_24h}</TableCell>
      <TableCell className="text-right">{item.current_price}</TableCell>
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