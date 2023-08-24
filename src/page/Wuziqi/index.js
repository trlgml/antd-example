import React, { useState } from 'react'
import './index.css'


const Wuziqi = () => {

  const [list, setList] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

  ])
  const [current, setCurrent] = useState(1)
  const hander = (item, i, j) => {
    if (item[j] > 0) {
      console.log('已落子');
      return
    }
    setCurrent((current) => {
      if (current > 1) {
        return 1
      }
      return 2
    })

    setList((list) => {
      list[i][j] = current
      return list
    })
  }
  return (
    <div className='Wuziqi'>
      {
        list.map((item, i) => {
          return (
            <div className='row' key={i}>
              {
                item.map((item2, j) => {
                  return (
                    <div className='coll' key={j} onClick={() => {
                      hander(item, i, j)
                    }}>
                      <div className={`${item2 === 1 ? 'coll-red' : ''} ${item2 === 2 ? 'coll-beige' : ''}`}></div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }

    </div>
  );
};



export default Wuziqi;