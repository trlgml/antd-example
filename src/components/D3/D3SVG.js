import React, { useEffect } from "react";
import * as d3 from "d3";

const D3SVG = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    const w = '100%'
    const h = '100%'
    const svg = d3.select('#D3SVG').append("svg").attr('width', w).attr('height', h)
    const g = svg.append('g').attr('transform', "translate(10,50)")
    g.append('path').attr('d', 'M30 40 C 50 10 ,70 10,120 40 S150 0,200 40').attr('id', 'path').style('fill', 'none').style('stroke', 'black')
    g.append('text').append('textPath').attr('xlink:href', '#path').text('hello world')

    svg.append('line').attr('x1', 0).attr('y1', 30).attr('x2', 30).attr('y2', 30).attr('stroke', "lightblue").attr('stroke-width', 4)
    svg.append('rect').attr('x', 0).attr('y', 0).attr('width', 20).attr('height', 20).attr("rx", 2).attr("fill", 'steelblue').attr("stroke", 'red').attr("fill-opacity", 0.5)
    svg.append('circle').attr('cx', 70).attr('cy', 40).attr('r', 40).style({ fill: '#000' })
    svg.append('ellipse').attr('cx', 150).attr('cy', 30).attr('rx', 30).attr('ry', 20).attr('fill', "lightblue")
  }

  return (
    <div>
      <div id="D3SVG">
      </div>
    </div>
  );
};

export default D3SVG