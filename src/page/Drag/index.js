import React, { useState, useRef } from "react";
import "./index.css";
import { Button } from 'antd'
const Drag = () => {
  const [style, setStyle] = useState({
    left: 100,
    top: 100,
  })

  const drawingRef = useRef()

  const oriPos = useRef({
    top: 0, // 元素的坐标
    left: 0,
    cX: 0, // 鼠标的坐标
    cY: 0
  })

  const isDown = useRef(false)


  function onMouseDown(e) {
    e.stopPropagation();
    isDown.current = true;
    // 元素相对于位置。
    const top = drawingRef.current.offsetTop;
    const left = drawingRef.current.offsetLeft;
    // 然后鼠标坐标是
    const cY = e.clientY;
    const cX = e.clientX;
    oriPos.current = {
      top, left, cX, cY
    }
  }


  function onMouseMove(e) {
    // 判断鼠标是否按住
    e.stopPropagation();
    if (!isDown.current) return
    // 元素位置 = 初始位置+鼠标偏移量
    const top = Math.max(0, oriPos.current.top + (e.clientY - oriPos.current.cY))
    const left = Math.max(0, oriPos.current.left + (e.clientX - oriPos.current.cX))
    setStyle({
      top,
      left
    })
  }

  function onMouseUp(e) {
    e.stopPropagation();
    isDown.current = false
  }

  return (
    <div className="Drag" >
      <Button>悬浮</Button>
      <div ref={drawingRef} className="drawing-item" onMouseOut={onMouseUp} onMouseUp={onMouseUp} onMouseMove={onMouseMove} onMouseDown={onMouseDown} style={style}>
        <p>
          Content Me!!!
          我可以拖动哦！！！
        </p>
      </div>
    </div >
  );
};

export default Drag