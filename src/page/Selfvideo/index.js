import React, { useState } from "react";
import Player from 'griffith'
import { Input, Row, Col } from "antd";

const { Search } = Input;
const Selfvideo = () => {
  const [src, setSrc] = useState('')
  const onSearch = (value) => {
    setSrc(value)
  }

  return (
    <div className="Selfvideo">
      <Search
        placeholder="请输入播放地址"
        allowClear
        enterButton="切换"
        onSearch={(value) => {
          onSearch(value)
        }}
      />
      <Row gutter={16}>
        <Col span={18} offset={3}>
          {src && (
            <Player
              id={src}
              sources={{ hd: { play_url: src } }}
              cover=''
              duration={1}
              standalone
              autoplay
              useMSE
              disablePictureInPicture
            />
          )}
        </Col>
      </Row>

    </div>
  );
};

export default Selfvideo