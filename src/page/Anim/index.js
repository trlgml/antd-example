import React, { useState } from "react";
import QueueAnim from 'rc-queue-anim';
import { Button, Row, Col } from 'antd';
import "./index.css";

const Anim = () => {
  const [show, setShow] = useState(true)
  const [transform, setTransform] = useState(false)
  return (
    <div className="queue-demo">

      {
        <div className={`trlgml  ${!show ? 'trlgml-t' : 'trlgml-c'}`}>
          <Button
            onClick={() => {
              setShow(true)
            }}
          >功能</Button>
        </div>
      }
      <div className={`trlgml ${show ? 'trlgml-m-c' : 'trlgml-m-t'}`}>
        <Button>挂断</Button>
      </div>
      <div className={`trlgml-h  ${show ? 'trlgml-h-c' : 'trlgml-h-t'}`}>
        <Button onClick={() => {
          setShow(false)
        }}>右侧</Button>
      </div>

      <Row className="trlgml">
        <Col span={12} className={`trlgml-item ${transform && 'trlgml-transform'}`}>
          <Button onClick={() => {
            if (!show) {
              setTransform(false)
            }
            setShow(((b) => {
              console.log(b);
              return !b
            }))
          }}>
            功能
          </Button>
        </Col>
        <Col>
          <QueueAnim type={['left', 'left']} leaveReverse onEnd={({ key, type }) => {
            console.log(type);
            if (type === 'leave') {
              setTransform(true)
            }
          }}>
            {
              show && [
                <div key="sss">
                  2222222222
                </div>,
                <div key="aaa">
                  2222222222
                </div>,
                <div key="bbb">
                  2222222222
                </div>,
                <div key="ccc">
                  2222222222
                </div>
              ]
            }
          </QueueAnim>
        </Col>
      </Row>
    </div >
  );
};


export default Anim