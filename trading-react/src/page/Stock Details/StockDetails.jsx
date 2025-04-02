import React, { useEffect } from 'react'
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { X } from "lucide-react";
import { BookmarkIcon, BookmarkFilledIcon } from '@radix-ui/react-icons';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TradingForm from './TradingForm';
import StockChart from "../Home/StockChart";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchCoinDetails } from '/src/State/Coin/Action';

const StockDetails = () => {
  const { coin, loading, error } = useSelector(store => ({
    coin: store.coin.coinDetails,
    loading: store.coin.loading,
    error: store.coin.error
  }));
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      dispatch(fetchCoinDetails({
        coinId: params.id, 
        jwt: localStorage.getItem("jwt")
      }));
    }
  }, [params.id, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading coin details</div>;
  if (!coin) return <div>No coin data available</div>;

  return (
    <div className='p-5 mt-5 text-foreground bg-background w-full'>  {/* Added w-full */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 w-full'>
        <div className='flex gap-5 items-center'>
          <Avatar>
            <AvatarImage 
              src={coin?.image?.large} 
              className="w-12 h-12 object-contain"
            />
            <AvatarFallback>
              {coin?.symbol?.slice(0, 2) || 'CO'}
            </AvatarFallback>
          </Avatar>   
        </div>
        <div className='flex items-center gap-2'>
          <p>{coin?.symbol.toUpperCase() || 'N/A'}</p>
          <X className='text-gray-400'/>
          <p className='text-gray-400'>{coin?.name || 'Unknown Coin'}</p>
        </div>
        <div className='flex items-end gap-2'>
          <p className='text-xl font-bold'>
            ${coin?.market_data?.current_price?.usd?.toLocaleString() || 'N/A'}
          </p>
          <p className={
            coin?.market_data?.price_change_percentage_24h >= 0 
              ? 'text-green-600' 
              : 'text-red-600'
          }>
            <span>
              {coin?.market_data?.price_change_24h?.toFixed(2) || 'N/A'}
            </span>
            <span>
              ({coin?.market_data?.price_change_percentage_24h?.toFixed(2) || 'N/A'}%)
            </span>
          </p>
        </div>
        <div className='flex items-center gap-4'>
          <Button>
            {true ? (
              <BookmarkFilledIcon className="h-6 w-6"/>
            ) : (
              <BookmarkIcon className='h-6 w-6'/>
            )}
          </Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button className="lg">Trade</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much do you want to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm coin={coin}/>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className='mt-14'>
        <StockChart coinId={params.id}/>
      </div>
    </div>
  );
};

export default StockDetails;