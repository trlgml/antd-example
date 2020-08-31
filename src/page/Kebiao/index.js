import React from 'react';
import './index.css';
import { Calendar, ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

function Kebiao() {
  let currentMonth = moment().month()
  const classList = [
    ['审计', '税法'],
    ['会计', '会计'],
    ['', '审计'],
    ['审计', '会计'],
    ['', '财管'],
    ['税法', ''],
    ['', '会计'],
    ['', '审计'],
    ['', '审计'],
    ['经济法', ''],
    ['会计', '会计'],
    ['审计', ''],
    ['税法', '财管'],
    ['', '经济法'],
    ['税法', '税法'],
    ['', '会计'],
    ['', '审计'],
    ['财管', '会计'],
    ['经济', '财管'],
    ['', '财管'],
    ['', '经济法'],
    ['', '审计'],
    ['', '审计'],
    ['会计', '经济法'],
    ['税法', ''],
    ['', '财管'],
    ['', '会计'],
    ['', '会计'],
    ['审计', '税法'],
    ['', '审计'],
    ['', ''],
  ]
  function getListData(value) {
    let listData;
    let currentDayClass = classList[value.get('date') - 1]
    if (value.month() === currentMonth) {
      switch (value.weekday() < 5) {
        case true:
          listData = currentDayClass.map((item, index) => {
            return { type: item, content: index === 0 ? '12:00~13:00' : '19:00~22:00' }
          })
          break;
        case false:
          listData = currentDayClass.map((item, index) => {
            return { type: item, content: index === 0 ? '09:00~12:00' : '19:00~22:00' }
          })
          break;
        default:
      }
    }

    return listData || [];
  }

  function dateFullCellRender(value) {
    const listData = getListData(value);
    const date = value.month() === currentMonth ? value.get('date') : ' '
    return (
      <div className="events">
        <div className="date">{date}</div>
        <div className="content">
          {listData.map(item => {
            return item.type ? (
              <div key={item.content}>
                {item.type}{item.content}
              </div>
            ) : null
          })}
        </div>
        <div className="footer"></div>
      </div>
    );
  }

  function disabledDate() {
    return true
  }

  function onSelect(current) {
    currentMonth = current.month();
  }

  return (
    <div className="Kebiao">
      <div>
      </div>
      <ConfigProvider locale={zh_CN}>
        <Calendar dateFullCellRender={dateFullCellRender} disabledDate={disabledDate} onSelect={onSelect} />
      </ConfigProvider>
    </div>
  );
}

export default Kebiao;
