import React, { useCallback, useEffect, useState } from "react";
import moment from 'moment'
import { DatePicker, Tag, Table } from 'antd';

const Northbound = (props) => {
  const [tabData, setTabData] = useState([])
  const [data, setData] = useState([])
  const [time, setTime] = useState(moment().subtract(1, 'days').format('YYYYMMDD'))
  const strToNumber = (str) => (Number(str.replace(/,/g, '')))
  const dynamicLoad = useCallback(({ time }) => {
    var _doc = document.getElementById('scriptId');
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.hkex.com.hk/chi/csm/DailyStat/data_tab_daily_${time}c.js?_=${+new Date()}`;
    script.onload = script.onreadystatechange = function () {
      if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
        setTabData(window.tabData);
      }
      script.onload = script.onreadystatechange = null;
    }
    _doc.appendChild(script);
  }, [])
  useEffect(() => {
    // dynamicLoad({ time: moment().format("YYYYMMDD") })
    dynamicLoad({ time })
  }, [dynamicLoad, time])
  useEffect(() => {
    setData([])
    const dataSh = tabData[0] ? tabData[0].content : []
    const top10Sh = dataSh[1] ? dataSh[1].table : { tr: [] }
    const dataSz = tabData[2] ? tabData[2].content : []
    const top10Sz = dataSz[1] ? dataSz[1].table : { tr: [] }
    setData([...top10Sh.tr.map(({ td }) => (td)), ...top10Sz.tr.map(({ td }) => (td))])
  }, [tabData])
  const rowKey = (row) => (row[0][1])
  const sorter = (a, b) => {
    return (strToNumber(a[0][3]) - strToNumber(a[0][4])) - (strToNumber(b[0][3]) - strToNumber(b[0][4]))
  }
  const columns = [
    {
      title: 'Code',
      dataIndex: ['0', '1'],
    },
    {
      title: '名称',
      dataIndex: ['0', '2'],
    },
    {
      title: '买',
      dataIndex: ['0', '3'],
    },
    {
      title: '卖',
      dataIndex: ['0', '4'],
    },
    {
      title: '合计',
      dataIndex: ['0', '5'],
    },
    {
      title: '差额',
      key: 'Diff',
      sorter: sorter,
      render: item => {
        return (
          <>
            {`${strToNumber(item[0][3]) - strToNumber(item[0][4])}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </>
        )
      },
    },
  ]
  function onChange(date) {
    setTime(moment(date).format("YYYYMMDD"))
  }

  return (
    <div>
      <DatePicker onChange={onChange} />
      <Tag>{time}</Tag>
      <div id="scriptId">
      </div>
      <Table columns={columns} dataSource={data} rowKey={rowKey} pagination={false} />
    </div>
  );
};

export default Northbound