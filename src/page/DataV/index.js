import React from "react";
import './index.css';
// import { Button } from "antd";
// import { Loading, FullScreenContainer } from '@jiaminghi/data-view-react'
// import { BorderBox1 } from '@jiaminghi/data-view-react'
// import { BorderBox4 } from '@jiaminghi/data-view-react'
// import { Decoration11 } from '@jiaminghi/data-view-react'
import { Charts } from '@jiaminghi/data-view-react'


const DataV = (props) => {
  const option = {
    title: {
      text: '剩余油量表',
      style: {
        fill: '#fff'
      }
    },
    series: [
      {
        type: 'gauge',
        data: [{ name: 'itemA', value: 55 }],
        center: ['50%', '55%'],
        axisLabel: {
          formatter: '{value}%',
          style: {
            fill: '#fff'
          }
        },
        axisTick: {
          style: {
            stroke: '#fff'
          }
        },
        animationCurve: 'easeInOutBack'
      }
    ]
  }
  return (
    <div className="DataV">
      {/* <FullScreenContainer>FullScreenContainer </FullScreenContainer> */}
      {/* <Loading>Loading...</Loading> */}

      {/* <BorderBox1>BorderBox1</BorderBox1> */}
      {/* <BorderBox4 reverse="{true}">BorderBox4</BorderBox4> */}

      {/* <Decoration11 style={{ width: '200px', height: '60px' }} >Decoration11</Decoration11> */}

      <Charts option={option} />
    </div>
  );
};


export default DataV;