'use client';

import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect, useState } from 'react';
import { vendorJSONData } from "api"; // must be callable in the browser

export default function BasicBars() {
  const [chartData, setChartData] = useState({ labels: [], quantities: [] });

  useEffect(() => {
    async function fetchData() {
      const oVendorData = await vendorJSONData();
      const openOrders = oVendorData.vendor_dashboard.open_orders;

      const labels = openOrders.map(order => order.product);
      const quantities = openOrders.map(order => order.quantity);

      setChartData({ labels, quantities });
    }

    fetchData();
  }, []);

  return (
    <BarChart    
      xAxis={[{ data: chartData.labels, scaleType: 'band' }]}
      series={[{ data: chartData.quantities }]}
      height={300}
    />
  );
}
