import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Axis = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    const w = '100%'
    const h = '500'
    const svg = d3.select('#D3Axis').append("svg").attr('width', w).attr('height', h)
    const scale = d3.scaleLinear()
      .domain([0, 10])
      .range([0, 100]);

    svg.append("g")
      .attr("transform", "translate(0,200)")
      .call(d3.axisBottom(scale).tickSize(5));
  }

  return (
    <div>
      <div id="D3Axis">
      </div>
    </div>
  );
};

export default D3Axis