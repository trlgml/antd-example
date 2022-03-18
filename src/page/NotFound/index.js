import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Result, Button } from "antd";

const NotFound = () => {
  return (
    <div className=" h-100vh bg-light d-flex align-items-center">
      <div className="page404 m-auto">
        <Result
          status="404"
          title="404"
          subTitle="抱歉，您访问的页面不存在!"
          extra={
            <Link to="/">
              <Button type="link">返回首页</Button>
            </Link>
          }
        />
      </div>
    </div>
  );
};

export default NotFound

