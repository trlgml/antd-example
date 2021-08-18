import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Tree = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    const data = {
      "name": "中国",
      "children":
        [
          {
            "name": "浙江",
            "children":
              [
                { "name": "杭州" },
                { "name": "宁波" },
                { "name": "温州" },
                { "name": "绍兴" }
              ]
          },

          {
            "name": "广西",
            "children":
              [
                {
                  "name": "桂林",
                  "children":
                    [
                      { "name": "秀峰区" },
                      { "name": "叠彩区" },
                      { "name": "象山区" },
                      { "name": "七星区" }
                    ]
                },
                { "name": "南宁" },
                { "name": "柳州" },
                { "name": "防城港" }
              ]
          },

          {
            "name": "黑龙江",
            "children":
              [
                { "name": "哈尔滨" },
                { "name": "齐齐哈尔" },
                { "name": "牡丹江" },
                { "name": "大庆" }
              ]
          },

          {
            "name": "新疆",
            "children":
              [
                { "name": "乌鲁木齐" },
                { "name": "克拉玛依" },
                { "name": "吐鲁番" },
                { "name": "哈密" }
              ]
          }
        ]
    }
    const w = 600;
    const h = 600;
    const svg = d3.select("#D3Tree")
      .append("svg")
      .attr("width", w)
      .attr("height", h);

    const tree = d3.tree()
      .size([w, h - 200])
      .separation(function (a, b) { return (a.parent == b.parent ? 1 : 2); });


    let root = d3.hierarchy(data, function (d) {
      return d.children;
    });
    const rootData = tree(root);

  }

  return (
    <div>
      <div id="D3Tree">

      </div>
    </div>
  );
};

export default D3Tree