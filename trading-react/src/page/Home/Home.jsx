import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Dot, MessageCircle, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from 'react-redux';
import { getCoinList } from "@/State/Coin/Action";
import { getTop50CoinList } from "/src/State/Coin/Action";

const Home = () => {
    const [category, setCategory] = React.useState("all");
    const [inputValue, setInputValue] = React.useState("");
    const [isBotRelease, setIsBotRelease] = React.useState(false)
    const {coin} = useSelector(store=>store)
    const dispatch = useDispatch()
    const handleBotRelease = () => setIsBotRelease(!isBotRelease);

    const handleCategory = (value) => {
        setCategory(value);
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key == "Enter"){
            console.log(inputValue)
        }
        setInputValue("")
    }

    useEffect(() => {
        dispatch(getTop50CoinList())
    },[category])
    
    useEffect(()=>{
          dispatch(getCoinList(1))
          console.log("Coin data:", coin)
        }, [])

    return (
        <div className="relative min-h-screen">
            <div className="lg:flex">
                {/* Left Side: Buttons and AssetTable */}
                <div className="lg:w-[50%] lg:border-r">
                    <div className="p-3 flex items-center gap-4">
                        <Button
                            onClick={() => handleCategory("all")}
                            variant={category === "all" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            All
                        </Button>
                        <Button
                            onClick={() => handleCategory("top50")}
                            variant={category === "top50" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Top 50
                        </Button>
                        <Button
                            onClick={() => handleCategory("topGainer")}
                            variant={category === "topGainer" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Top Gainers
                        </Button>
                        <Button
                            onClick={() => handleCategory("topLosers")}
                            variant={category === "topLosers" ? "default" : "outline"}
                            className="rounded-full"
                        >
                            Top Losers
                        </Button>
                    </div>
                    <AssetTable coin = {category == "all"?coin.coinList:coin.top50} category = {category}/>
                    <div>
                    <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                        <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                        <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                    </Pagination>

                    </div>

                    
                </div>

                {/* Right Side: StockChart and ETH Info */}
                <div className="lg:w-[50%] p-5 space-y-4">
                    <StockChart coinId = {"bitcoin"}/>
                    
                    {/* Compact ETH Info */}
                    <div className="flex items-center justify-between mt-4 p-2 bg-gray-100 rounded-lg">
                        <div className="flex items-center gap-2">
                            <Avatar className="w-6 h-6">
                                <AvatarImage 
                                    src="https://cryptologos.cc/logos/ethereum-eth-logo.png" 
                                    className="w-5 h-5 object-contain"
                                />
                            </Avatar>
                            <p className="font-medium text-sm">ETH</p>
                            <Dot className="text-gray-400 w-4 h-4" />
                            <p className="text-gray-400 text-xs">Ethereum</p>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-bold">$5,464</p>
                            <p className="text-xs text-red-500">-12.34 (-0.29%)</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Chat Bot Section */}
            <section className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
                {/* Chat Window (Hidden by default) */}
                {isBotRelease && <div className="rounded-md w-[20rem] md:w-[25rem] h-[70vh] bg-slate-900 text-white">
                    <div className="flex justify-between items-center border-b px-6 h-[12%]">
                        <p>Chat Bot</p>
                        <Button 
                        onClick = {handleBotRelease}
                        variant="ghost" size="icon">
                            <X className="text-white" />
                        </Button>
                    </div>
                    <div className="h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container">
                        <div className="self-start pb-5 w-auto">
                            <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                <p>Hi, Idris Adeeb</p>
                                <p>You can ask me any crypto related question</p>
                                <p>Like, price, market cap extra...</p>
                            </div>
                        </div>
                        {[1,1,1,1].map((item, i) => (
                            <div key={i} className={`${i%2 === 0 ? "self-start" : "self-end"} pb-5 w-auto`}>
                                {i%2 == 0?<div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                    <p>Prompt: Who are you?</p>
                                </div>: <div className="justify-end self-end px-5 py-2 rounded-md bg-slate-800 w-auto">
                                    <p>Answer: Hi, Ram Arora</p>
                                </div>}
                                
                                
                            </div>
                        ))}
                    </div>
                    <div className="h-[12%] border-t">
                        <Input className="w-full h-full order-none outline-none"
                        placeholder = "Write prompt"
                        onChange = {handleChange}
                        value = {inputValue}
                        onKeyPress = {handleKeyPress}></Input>
                    </div>
                </div>}

                {/* Chat Toggle Button */}
                <Button 
                onClick = {handleBotRelease}
                className="w-[10rem] h-12 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white">
                    <MessageCircle size={20} className="stroke-white" />
                    <span className="text-base">Chat Bot</span>
                </Button>
            </section>
        </div>
    );
};

export default Home;