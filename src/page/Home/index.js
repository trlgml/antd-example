import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  // const list = [
  //   { name: 'Demo', path: '/demo' },
  //   { name: '日历课表', path: '/kebiao' },
  //   { name: '画板', path: '/Paletee' },
  //   { name: '视频播放器', path: '/Selfvideo' },
  //   { name: '音频播放器', path: '/Selfaudio' },
  //   { name: 'Anim', path: '/Anim' },
  //   { name: '拷贝', path: '/Copy' },
  //   { name: '拖拽', path: '/drag' },
  //   { name: '富文本编辑器', path: '/editor' },
  //   { name: 'D3测试', path: '/D3' },
  //   { name: '北向资金数据', path: '/Northbound' },
  //   { name: '纪念币', path: '/JiNianBi' },
  //   { name: 'DataV', path: '/DataV' },
  //   { name: 'Test', path: '/Test' },
  // ]

  const files = require.context('../../page', true, /\.js$/)

  let pages = {};
  files.keys().forEach(key => {
    pages[key.replace(/(\.\/|\.js)/g, '')] = files(key).default;
  })
  let routers = [];
  Object.keys(pages).forEach(item => {
    routers.push({
      path: `/${item.replace(/([A-Za-z]{0,})\/index/g, '$1')}`,
      name: item,
    })
  });

  return (
    <div className="home">
      {/* <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      /> */}
      {
        routers.map((item) => {
          return (
            <Button type="link" key={item.name}><Link to={item.path}>{item.name}</Link></Button>
          )
        })
      }
    </div>
  );
};

export default Home;