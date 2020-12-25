import React, { useState } from "react";
import { Button } from 'antd';
import "./index.css";

const Anim = () => {
  const [current, setCurrent] = useState(0)
  const list = [1, 2, 3, 4, 5, 6, 7]
  const len = list.length
  return (
    <div className="queue-demo">
      {current}
      <div className="answer">
        {
          list.map((item, index) => {
            return (
              <div key={item} className={`item ${[0, 1, 2].includes(index - current) ? 'card-' + (index - current) : current > index && 'card-n'} `}>
                <div>{item}</div>
              </div>
            )
          })
        }
      </div>
      <Button
        onClick={() => {
          setCurrent((i) => {
            if (i === 0) return i

            return --i
          })
        }}>上</Button>
      <Button
        onClick={() => {
          setCurrent((i) => {
            if (i === len - 1) return i
            return ++i
          })
        }}
      >下</Button>
    </div >
  );
};


export default Anim