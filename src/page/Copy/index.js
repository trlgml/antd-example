import React from "react";
import { List, Button } from "antd";
import copy from "copy-to-clipboard";
// import list from "./copy"
const list = []
const Copy = (props) => {
  const myCopy = (data) => {
    copy(data)
  }
  return (
    <div className="Imgae" >
      <List
        size="large"
        bordered
        dataSource={list}
        renderItem={
          item => <List.Item>
            <div>
              <Button onClick={() => {
                myCopy(item.split('-')[0])
              }}>{item.split('-')[0]}</Button>
              <Button onClick={() => {
                myCopy(item.split('-')[1])
              }}>{item.split('-')[1]}</Button>
              <Button onClick={() => {
                myCopy(item.split('-')[2])
              }}>{item.split('-')[2]}</Button>
            </div>
          </List.Item>
        }
      />
    </div>
  );
};

export default Copy