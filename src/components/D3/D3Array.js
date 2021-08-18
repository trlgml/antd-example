import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Array = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    // const w = '100%'
    // const h = '100%'
    // const svg = d3.select('#D3Array').append("svg").attr('width', w).attr('height', h)
    const data = [1, 2, 3, 4]
    const dataObj = [{ a: 1 }, { a: 4 }]
    const min = d3.min(data)
    const minObj = d3.min(dataObj, (d) => d.a)
    const max = d3.max(data)
    const extent = d3.extent(data)//最大最小值
    const sum = d3.sum(data)
    const mean = d3.mean(data)//平均值
    const median = d3.median(data)//中位数
    const quantile = d3.quantile(data, 0.1)//分位数
    const deviation = d3.deviation(data)//标准差
    const variance = d3.variance(data)//无偏估计方差

    const cross = d3.cross(data, data)// 两个数组的笛卡尔积
    const merge = d3.merge([data])// 二维转一维
    const permute = d3.permute(data, [3, 0, 2, 1])// 按新下标排序数组
    const shuffle = d3.shuffle(data)// 乱序数组
    const ticks = d3.ticks(1, 10, 4)// 在 start 和 stop (包含)之间返回大约 count + 1 个等间隔的数组序列
    const tickStep = d3.tickStep(1, 10, 4)// ticks刻度的差值  
    const tickIncrement = d3.tickIncrement(1, 10, 4)// ticks刻度的差值
    const range = d3.range(2, 10, 4)// 从2（含）到10（不含）之间，步长为4生成数组
    const zip = d3.zip(data, data)// 数组i下标组成的二维数组
  }

  return (
    <div>
      <div id="D3Array">
      </div>
    </div>
  );
};

export default D3Array