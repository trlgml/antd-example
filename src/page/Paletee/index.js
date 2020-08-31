import React, { useState, useEffect } from 'react';
import { Button, Select, InputNumber, Row, Col } from 'antd';
import Palette from './palette';
const { Option } = Select;

function Paletee() {
  const handleList = [
    { name: '圆', type: 'arc' },
    { name: '线条', type: 'line' },
    { name: '椭圆', type: 'ellipse' },
    { name: '矩形', type: 'rect' },
    { name: '多边形', type: 'polygon' },
    { name: '橡皮擦', type: 'eraser' },
    { name: '撤回', type: 'cancel' },
    { name: '前进', type: 'go' },
    { name: '清屏', type: 'clear' }
  ]
  const [drawColor, setDrawColor] = useState('rgba(19, 206, 102, 1)')
  const [lineWidth, setLineWidth] = useState(5)
  // const [drawType, setDrawType] = useState('line')
  const [palette, setPalette] = useState(null)
  const [allowCancel, setAllowCancel] = useState(false)
  const [allowGo, setAllowGo] = useState(false)
  const handleClick = (item) => {
    if (['cancel', 'go', 'clear'].includes(item.type)) {
      moveCallback(item.type);
      palette[item.type]();
      return;
    }
    palette.changeWay({ type: item.type });
    if (['color', 'lineWidth'].includes(item.type)) return;
    // setDrawType(item.type);
  }
  const handleColorChange = (value) => {
    palette.changeWay({ color: value });
    setDrawColor(value)
  }
  const handleWidthChange = (value) => {
    palette.changeWay({ lineWidth: value });
    setLineWidth(value)
  }
  const handleSidesChange = (value) => {
    palette.changeWay({ sides: value });
  }
  const allowCallback = (cancel, go) => {
    setAllowCancel(!cancel)
    setAllowGo(!go)
  }
  const moveCallback = (...arr) => {
    console.log(arr);
    // const link = document.querySelector("#link")
    // palette.snapshot(link, 'name')
    // socket.send(JSON.stringify(arr));
    // let [type, ...arr] = JSON.parse(e.data);
    // palette[type](...arr)

  }
  useEffect(() => {
    const canvas = document.querySelector("#canvas")
    const palette = new Palette(canvas, {
      allowCallback,
      moveCallback
    })
    setPalette(palette)
  }, [])

  return (
    <div>
      <Row>
        <Col span={24} className="center">
          <canvas id="canvas" width='900' height="600"></canvas>
          {/* <a id="link" href="javascript:void(0)"></a> */}
        </Col>
        <Col span={24}>
          {
            handleList.map((item) => {
              return (<Button key={item.type} onClick={() => { handleClick(item) }} disabled={(item.type === 'cancel' && allowCancel) || (item.type === 'go' && allowGo)}>{item.name}</Button>)
            })
          }
          <Select defaultValue={drawColor} style={{ width: 250 }} onChange={handleColorChange}>
            <Option value="rgba(19, 206, 102, 1)">rgba(19, 206, 102, 1)</Option>
            <Option value="rgba(180, 238, 180, 1)">rgba(180, 238, 180, 1)</Option>
            <Option value="rgba(148, 0, 211, 1)">rgba(148, 0, 211, 1)</Option>
          </Select>
          <Select defaultValue={lineWidth} style={{ width: 120 }} onChange={handleWidthChange}>
            <Option value="2">2</Option>
            <Option value="5">5</Option>
            <Option value="8">8</Option>
          </Select>
          <InputNumber min={3} max={10} defaultValue={3} onChange={handleSidesChange} />
        </Col>
      </Row>
    </div >
  );
}
export default Paletee