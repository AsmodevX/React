import React, { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import Carrito from './cart';

const Iconos: React.FC = () => {
    const [open,setOpen] = useState(false)
  return <Space>
<ShoppingCartOutlined onClick={() => setOpen(true)}/>
{
    open && <Carrito/>
}
  </Space>
};

export default Iconos;