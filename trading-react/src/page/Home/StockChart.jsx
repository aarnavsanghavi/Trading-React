import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { Button } from "@/components/ui/button"; // Make sure to import your Button component or use a button element

const timeSeries = [
    {
      keyword: "DIGITAL_CURRENCY_DAILY",
      key: "Time Series (Daily)",
      lable: "1 Day",
      value: 1,
    },
    {
      keyword: "DIGITAL_CURRENCY_WEEKLY",
      key: "Weekly Time Series",
      lable: "1 Week",
      value: 7,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY",
      key: "Monthly Time Series",
      lable: "1 Month",
      value: 30,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY_3",
      key: "3 Month Time Series",
      lable: "3 Month",
      value: 90,
    },
    {
      keyword: "DIGITAL_CURRENCY_MONTHLY_6",
      key: "6 Month Time Series",
      lable: "6 Month",
      value: 180,
    },
    {
      keyword: "DIGITAL_CURRENCY_YEARLY",
      key: "Yearly Time Series",
      lable: "1 year",
      value: 365,
    },
];

const StockChart = () => {
    const [activeLable, setActiveLable] = useState("1 Day");
    const series = [
        {
            name: "Price",
            data: [
                [Date.parse("2023-01-01"), 100],
                [Date.parse("2023-01-02"), 110],
                [Date.parse("2023-01-03"), 105],
                [Date.parse("2023-01-04"), 115],
                [Date.parse("2023-01-05"), 120],
                [Date.parse("2023-01-06"), 118],
                [Date.parse("2023-01-07"), 125],
                [Date.parse("2023-01-08"), 130],
                [Date.parse("2023-01-09"), 128],
                [Date.parse("2023-01-10"), 135],
                [Date.parse("2023-01-11"), 140],
                [Date.parse("2023-01-12"), 138],
                [Date.parse("2023-01-13"), 145]
            ]
        }
    ];

    const options = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 450,
            zoom: {
                autoScaleYaxis: true
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: "datetime",
            tickAmount: 6
        },
        colors:["#758AA2"],
        markers: {
            size: 0,
            style: "hollow"
        },
        tooltip: {
            theme: "dark",
            x: {
                format: "dd MMM yyyy"
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
        grid: {
            borderColor: "#47535E",
            strokeDashArray: 4,
            show: true
        },
        yaxis: {
            title: {
                text: "Price"
            }
        }
    };
    const handleActiveLable = (value)=>{
        setActiveLable(value);
    }
    return (
        <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}>
            <div className="space-x-3"> 
                {timeSeries.map((item) => (
                    <Button 
                        variant = {activeLable == item.lable?"":"outline"}
                        onClick = {()=>handleActiveLable(item.lable)}
                        key={item.lable}
                        className="px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        {item.lable}
                    </Button>
                ))}
            </div>
            <div id="chart-timelines">
                <ReactApexChart
                    options={options}
                    series={series}
                    height={450}
                    type="area"
                />
            </div>
        </div>
    );
};

export default StockChart;