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
    // series: 실제 데이터 값
    // series: [{name: "일자"}],
    series: [
      { name: "일자", data: data && data.map((item) => item.totalPayment) },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      // x축의 라벨
      xaxis: {
        //   categories: data && data.map(item => item.totalProfit)
        // categories: ["01-01", "01-02"]
        categories: data && data.map((item) => item.orderDate.substr(5, 5)),
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