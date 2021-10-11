import React from 'react';
import { Table } from 'antd';
import jnb from './jnb.json';
import './index.css';

function JiNianBi() {
  const columns = [
    {
      title: '编号',
      dataIndex: '0',
    },
    {
      title: '名称',
      dataIndex: '1',
    },
    {
      title: '发行时间',
      dataIndex: '2',
    },
    {
      title: '发行数量',
      dataIndex: '3',
    },
    {
      title: '价格',
      dataIndex: '4',
    },
    {
      title: '单位',
      dataIndex: '5',
    },
    {
      title: '图片',
      key: 'Image',
      render: item => {
        console.log();
        return (
          <img
            src={item.image}
          />
        )
      },
    },
  ]
  const data = jnb
  return (
    <div className="JiNianBi">
      <Table columns={columns} dataSource={data} pagination={false} bordered={true} size='small' />
    </div>
  );
}

export default JiNianBi;
