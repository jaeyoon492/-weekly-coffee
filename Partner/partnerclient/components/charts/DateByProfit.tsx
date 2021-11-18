import { ApexOptions } from 'apexcharts';
import { useEffect, useState } from "react";
import React from 'react';
import dynamic from "next/dynamic";
import { Profit } from '../../pages';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });



const DateByProfit = ( data : Profit) => {

    console.log(data);

    const chartData: {
        series: {
          name: string;
          data: number[];
        }[];
        options: ApexOptions;
      } = {
        // series: 실제 데이터 값
       series: [{name: "일자", data: [1]}],
        // series: [{name: "일자"}],
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          // x축의 라벨
          xaxis: {
            //   categories: data && data.map(item => item.totalProfit)
            //   categories: data.map(item => item.orderDate)
            categories: ["01-01", "01-02"]
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
              height="200px"
            />
          )}
        </div>
      );
};

export default DateByProfit;