import React from "react";
import { Input } from "antd";
import Audio from "../../components/Audio";
import { useState } from "react";

const { Search } = Input;
const Selfaudio = () => {
  // const src = 'https://demo.dj63.com//2016/CLUB商业/club中文/20140401/祁隆_新年大吉[Dj阿远_贺岁舞曲].mp3'
  const [src, setSrc] = useState(null)
  const onSearch = (value) => {
    setSrc(value)
  }
  return (
    <div className="Selfaudio">
      <Search
        placeholder="请输入播放地址"
        allowClear
        enterButton="切换"
        onSearch={(value) => {
          onSearch(value)
        }}
      />
      <Audio src={src}></Audio>
    </div>
  );
};

export default Selfaudio