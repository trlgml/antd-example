import React from "react";
import { List, Button } from "antd";
import copy from "copy-to-clipboard";
// import list from "./copy"
const list = [
  "郭明亮-130623199008133017-15904165989",
  "郭妍辰-210711201903045021-19910230407",
  "李雨桐-210702198904071028-17701089944",
  "李洪喜-210703196012293052-17701089944",
  "王玉兰-210703194111253049-17701089944",
  "张玉宽-210703194009263013-17701089944",
  "张云辉-210703196508182620-17701089944",
  "郭明月-130623198706023056-17701089944",
  "郭有同-130623196502013017-17701089944",
  "孙秀玲-13062319631130302X-17701089944",
]
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