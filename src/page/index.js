import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const Home = () => {
  const list = [
    { name: 'Demo', path: '/demo' },
    { name: '课表打印', path: '/kebiao' },
    { name: 'Paletee', path: '/Paletee' },
    { name: 'Selfvideo', path: '/Selfvideo' },
    { name: 'Selfaudio', path: '/Selfaudio' },
    { name: 'Anim', path: '/Anim' },
    { name: 'Im', path: '/Im' },
    { name: 'Copy', path: '/Copy' },
    { name: 'Drag', path: '/drag' },
    { name: 'Editor', path: '/editor' },
  ]
  return (
    <div className="home">
      {
        list.map((item) => {
          return (
            <Link to={item.path} key={item.name}>
              <Button type="link">{item.name}</Button>
            </Link>
          )
        })
      }
    </div>
  );
};

export default Home;