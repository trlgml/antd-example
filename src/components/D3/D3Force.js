import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Force = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    const nodes = [{ name: "桂林" }, { name: "广州" },
    { name: "厦门" }, { name: "杭州" },
    { name: "上海" }, { name: "青岛" },
    { name: "天津" }];

    const links = [{ source: 0, target: 1 }, { source: 0, target: 2 },
    { source: 0, target: 3 }, { source: 1, target: 4 },
    { source: 1, target: 5 }, { source: 1, target: 6 }];

    const w = 600;
    const h = 600;
    const svg = d3.select("#D3Force")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    var simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).distance(100))
      .force("charge", d3.forceManyBody())//创建多体力
      .force("center", d3.forceCenter(w / 2, h / 2));

    simulation
      .nodes(nodes)//设置力模拟的节点
      .on("tick", ticked);

    simulation.force("link")//添加或移除力
      .links(links);//设置连接数组
    var color = d3.scaleOrdinal(d3.schemeCategory10);


    var svg_links = svg.selectAll("line")
      .data(links)
      .enter()
      .append("line")
      .style("stroke", "#ccc")
      .style("stroke-width", 3)
      .call(d3.zoom()//创建缩放行为
        .scaleExtent([-5, 2])//设置缩放范围
      );

    var svg_nodes = svg.selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("cx", function (d) { return d.x; })
      .attr("cy", function (d) { return d.y; })
      .attr("r", '20')
      .attr("fill", function (d, i) {
        return color(i);
      }).call(d3.drag().on("start", dragstarted)//d3.drag() 创建一个拖曳行为
        .on("drag", dragged)
        .on("end", dragended));

    //添加描述节点的文字
    var svg_texts = svg.selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .style("fill", "black")
      .attr("dx", 20)
      .attr("dy", 8)
      .text(function (d) {
        return d.name;
      });
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();//设置目标α
      event.fx = event.x;
      event.fy = event.y;
    }

    function dragged(event) {
      event.fx = event.x;
      event.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.fx = null;
      event.fy = null;
    }

    function ticked() {
      svg_links.attr("x1", function (d) { return d.source.x; })
        .attr("y1", function (d) { return d.source.y; })
        .attr("x2", function (d) { return d.target.x; })
        .attr("y2", function (d) { return d.target.y; });

      svg_nodes.attr("cx", function (d) { return d.x; })
        .attr("cy", function (d) { return d.y; });

      svg_texts.attr("x", function (d) { return d.x; })
        .attr("y", function (d) { return d.y; });
    }
  }

  return (
    <div>
      <div id="D3Force">

      </div>
    </div>
  );
};

export default D3Force