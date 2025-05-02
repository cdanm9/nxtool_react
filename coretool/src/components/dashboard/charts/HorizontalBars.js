import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
// import { useEffect, useState } from 'react';
import { useEffect,useState } from 'react';
import { vendorJSONData } from "api"; // must be callable in the browser

const chartSetting = {
  xAxis: [   
    {
      label: 'Quantity',
    },
  ],
  height: 320
};

export default function HorizontalBars() {
//   const dataset = deliveryData.delivery;
  const [dataset,setDataset] = useState([])

    useEffect(()=>{

        async function fetchUpcomingData(){
            const oVendorData = await vendorJSONData();
            const upcomingDeliveries = oVendorData.vendor_dashboard.upcoming_deliveries;
    
            setDataset(upcomingDeliveries);
        }
        fetchUpcomingData()
    },[])
  return (
    <BarChart
      dataset={dataset}   
      yAxis={[{ scaleType: 'band', dataKey: 'product' }]} // Y-axis is product name
      series={[{ dataKey: 'quantity', label: 'Delivery Quantity' }]} // Bar represents quantity
      layout="horizontal"
      {...chartSetting}
    />
  );
}
