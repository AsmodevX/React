import React from 'react';
import { Input, Space } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';


const { Search } = Input;

const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

const Buscar: React.FC = () => (
  <Space direction="vertical">
    <Search placeholder="Buscar productos..." allowClear onSearch={onSearch} style={{ width: 500 }} />
  </Space>
);

export default Buscar;