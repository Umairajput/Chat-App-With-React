import React from 'react';
import {  Space, Spin } from 'antd';
const Load = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
      margin:'auto'
    }}
  >
    <Space>
      <Spin tip="Loading" size="small">
        <div className="content" />
      </Spin>
    </Space>
  </Space>
);
export default Load;