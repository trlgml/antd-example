import React from "react";
import { Provider } from "react-redux";
import Route from "./routes";
import store from "./redux";
import { ConfigProvider } from "antd";
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");

const App = () => (
  <ConfigProvider locale={zh_CN}>
    <Provider store={store}>
      <Route></Route>
    </Provider>
  </ConfigProvider>
);

export default App;
