import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Rect = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    const dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
      11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
    const w = 600;
    const h = 250;

    const xScale = d3.scaleBand()//序数比例尺
      .domain(d3.range(dataset.length))//    设置序数比例尺的值域
      .range([0, w]);//根据输入值域的长度将自动将其分为相等的块，并且设定间距

    const yScale = d3.scaleLinear()//线性比例尺
      .domain([0, d3.max(dataset)])//设置线性比例尺的值域
      .range([h, 0]);//设置线性比例尺的输出范围

    const svg = d3.select("#D3Rect")
      .append("svg")
      .attr("width", w + 40)
      .attr("height", h + 50);//创建svg
    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("x", function (d, i) {
        return xScale(i) + 30;//设置rect的起点
      })
      .attr("y", function (d) {
        return yScale(d) + 10;//yScale(d)依次取出数据值
      })
      .attr("width", function (d) {
        return xScale.bandwidth() - 2;//设置每个条形的宽度
      })
      .attr("height", function (d) {
        return h - yScale(d);//设置每个条形的高度
      })
      .attr("fill", 'steelblue')
      .on("mouseover", function (d, i) {
        d3.select(this)
          .attr("fill", "yellow");
      })
      .on("mouseout", function (d, i) {
        d3.select(this)
          .transition()
          .duration(500)
          .attr("fill", "steelblue");
      });

    svg.selectAll("text")
      .data(dataset)
      .enter()
      .append("text")
      .text(function (d) {
        return d;
      })
      .attr("text-anchor", "middle")
      .attr("x", function (d, i) {
        return xScale(i) + xScale.bandwidth() / 2 + 30;
      })
      .attr("y", function (d) {
        return yScale(d) + 24;
      })
      .attr("font-family", "sans-serif")
      .attr("font-size", "11px")
      .attr("fill", "red")
      .transition()
      .duration(1750)
      .delay((d, i) => {
        return i * 200
      })
      .ease(d3.easeLinear)
      .on("start", function repeat() {
        d3.active(this)
          .style("fill", "steelblue")
          .transition()
          .style("fill", "red")
          .transition()
          .on("start", repeat);
      });

    svg.append("g")
      .attr("transform", `translate(30,${h + 15})`) // 平移操作，2个参数，第一个参数是向右平移的像素，第二个是向下平移的像素。
      .call(d3.axisBottom(xScale));


    svg.append("g")
      .attr("transform", `translate(25,10)`) // 平移操作，2个参数，第一个参数是向右平移的像素，第二个是向下平移的像素。
      .call(d3.axisLeft(yScale));
  }

  return (
    <div>
      <div id="D3Rect">

      </div>
    </div>
  );
};

export default D3Rect