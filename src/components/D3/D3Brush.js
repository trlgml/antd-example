import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Brush = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    const w = '100%'
    const h = '100%'
    const svg = d3.select('#D3Brush').append("svg").attr('width', w).attr('height', h)
    const brushed = (...data) => {
      console.log(data);
    }

    svg.append("g")
      .attr("class", "brush")
      .call(d3.brush().on("brush", brushed));


  }

  return (
    <div>
      <div id="D3Brush">
      </div>
    </div>
  );
};

export default D3Brush