import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Demo = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    var c = d3.color("steelblue")
    var hsl = d3.hsl("steelblue")
    console.log(c);
    console.log(hsl);

    var accent = d3.scaleOrdinal(d3.schemeAccent);
    var blues = d3.scaleOrdinal(d3.schemeBlues[9]);
    var piyg = d3.scaleSequential(d3.interpolatePiYG);

  }

  return (
    <div>
      <div id="D3Demo">
      </div>
    </div>
  );
};

export default D3Demo