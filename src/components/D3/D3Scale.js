import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Scale = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    const w = '100%'
    const h = '100%'
    const svg = d3.select('#D3Scale').append("svg").attr('width', w).attr('height', h)
    const x = d3.scaleLinear().domain([0, 10]).range([20, 300])
    const color = d3.scaleLinear().domain([10, 100]).range(["brown", "steelblue"]);
    // x.invert(21)//根据您range反推domainn的值


    svg.append("g")
      .attr("transform", "translate(0,100)")
      .call(d3.axisBottom(x));


  }

  return (
    <div>
      <div id="D3Scale">
      </div>
    </div>
  );
};

export default D3Scale