import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from "react";
import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export interface Prop {
  data: {
    orderDate: string;
    totalPayment: number;
  }[];
}

const DateByProfit = ({ data }: Prop) => {
  console.log("chartdata");
  console.log(data);

  const chartData: {
    series: {
      name: string;
      data: number[];
    }[];
    options: ApexOptions;
  } = {
    series: [
      { name: "일자", data: data && data.map((item) => item.totalPayment) },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: data && data.map((item) => item.orderDate),
      },
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
      },
      fill: {
        colors: [
          () => {
            return "rgb(191, 103, 27)";
          },
        ],
      },
    },
  };

  return (
    <div>
      {chartData && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height="250px"
        />
      )}
    </div>
  );
};

export default DateByProfit;