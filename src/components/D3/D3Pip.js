import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Pip = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    const dataset = [5, 10, 13, 19, 25];
    const w = 600;
    const h = 600;
    const svg = d3.select("#D3Pip")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    const pie = d3.pie()(dataset);
    const outerRadius = 150; //外半径
    const innerRadius = 0; //内半径，为0则中间没有空白
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arc = d3.arc()  //弧生成器
      .innerRadius(innerRadius)   //设置内半径
      .outerRadius(outerRadius);  //设置外半径

    const arcs = svg.selectAll("g")
      .data(pie)
      .enter()
      .append("g")
      .attr("transform", "translate(" + (h / 2) + "," + (w / 2) + ")");



    arcs.append("path")
      .attr("fill", function (d, i) {
        return color(i);
      })
      .attr("d", function (d) {
        return arc(d);
      });

    arcs.append("text")
      .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";//arc.centroid(d) 能算出弧线的中心
      })
      .attr("text-anchor", "middle")
      .text(function (d) {
        return d.data;
      });
  }

  return (
    <div>
      <div id="D3Pip">

      </div>
    </div>
  );
};

export default D3Pip