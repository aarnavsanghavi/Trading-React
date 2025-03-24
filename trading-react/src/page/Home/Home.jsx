import React from "react";
import { Button } from "@/components/ui/button";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Dot } from "lucide-react"; // Using Dot from lucide-react instead of DotIcon

const Home = () => {
    const [category, setCategory] = React.useState("all");

    const handleCategory = (value) => {
        setCategory(value);
    };

    return (
        <div className="relative">
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
                    <AssetTable />
                </div>

                {/* Right Side: StockChart and ETH Info */}
                <div className="lg:w-[50%] p-5 space-y-4">
                    <StockChart />
                    
                    <div className="flex gap-5 items-center mt-4 p-4 bg-gray-100 rounded-lg">
                        <div>
                            <Avatar>
                                <AvatarImage src="https://cryptologos.cc/logos/ethereum-eth-logo.png" />
                            </Avatar>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="font-medium">ETH</p>
                            <Dot className="text-gray-400" />
                            <p className="text-gray-400">Ethereum</p>
                        </div>
                        <div className="ml-auto">
                            <p className="text-xl font-bold">$5,464</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;