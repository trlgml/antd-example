import React, { useEffect } from "react";
import * as d3 from "d3";

const D3Element = (props) => {
  useEffect(() => {
    drawChart()
  }, [])

  const drawChart = () => {
    var dataset = [3, 6, 9, 12, 15];

    //选择body中的p元素
    var p = d3.select("#D3Element").selectAll("p");

    //获取update部分
    var update = p.data(dataset);

    //获取enter部分
    var enter = update.enter();
    //获取exit部分
    var exit = update.exit();

    //update部分的处理：更新属性值
    update.text(function (d) {
      return "update " + d;
    });

    //enter部分的处理：添加元素后赋予属性值
    enter.append("p")
      .text(function (d) {
        return "enter " + d;
      });

    exit.text(function (d) {
      return "exit";
    });
    // exit.remove();


    //update部分的处理：更新属性值
    update.text(function (d) {
      return "update " + d;
    });

    // Update、既有的select
    // Enter、需要补充的select
    // Exit、多余的select
    // dataset 长度大于3，enter生效，小于3，exit生效
  }

  return (
    <div>
      <div id="D3Element">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
};

export default D3Element