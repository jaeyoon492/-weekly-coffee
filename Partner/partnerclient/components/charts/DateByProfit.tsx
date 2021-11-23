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
    // series: [
    //   {
    //     name: "일자",
    //     data: [
    //       153400, 124000, 323040, 180000, 23000, 140000, 50123, 45000, 300000,
    //       210000,
    //     ],
    //   },
    // ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      // x축의 라벨
      xaxis: {
        // categories: [
        //   "11-01",
        //   "11-02",
        //   "11-03",
        //   "11-04",
        //   "11-05",
        //   "11-06",
        //   "11-07",
        //   "11-08",
        //   "11-09",
        //   "11-10",
        // ],
        categories: data && data.map((item) => item.orderDate),
      },
      // y축의 형식을 지정
      yaxis: {
        labels: {
          formatter: function (val: number) {
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          },
        },
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