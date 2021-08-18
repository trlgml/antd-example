import React from "react";
import * as d3 from "d3";
import D3Rect from "../../components/D3/D3Rect";
import D3Pip from "../../components/D3/D3Pip";
import D3Element from "../../components/D3/D3Element";
import D3Force from "../../components/D3/D3Force";
import D3Tree from "../../components/D3/D3Tree";
import D3Chinamap from "../../components/D3/D3Chinamap";
import D3SVG from "../../components/D3/D3SVG";
import D3Array from "../../components/D3/D3Array";
import D3Axis from "../../components/D3/D3Axis";
import D3Scale from "../../components/D3/D3Scale";
import D3Brush from "../../components/D3/D3Brush";
import D3Demo from "../../components/D3/D3Demo";

const D3 = (props) => {

  return (
    <div>
      <div id="d3">
        {/* <D3Brush></D3Brush> */}
        {/* <D3Scale></D3Scale> */}
        {/* <D3Axis></D3Axis> */}
        {/* <D3Array></D3Array> */}
        {/* <D3SVG></D3SVG> */}
        {/* <D3Chinamap></D3Chinamap> */}
        {/* <D3Tree></D3Tree> */}
        {/* <D3Force></D3Force> */}
        {/* <D3Pip></D3Pip> */}
        {/* <D3Rect></D3Rect> */}
        {/* <D3Element></D3Element> */}
        <D3Demo></D3Demo>
      </div>
    </div>
  );
};

export default D3