import React, { useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { FloatButton } from 'antd';
import Carrito from './cart';


const Sera: React.FC = () => {
  const [open,setOpen] = useState(false)
return <div className="top-right">
  { !open && <FloatButton style={{bottom:520}} icon={<ShoppingCartOutlined />} tooltip={<div>Carrito</div>} onClick={() => setOpen(true)} />}
    {
        open && <Carrito state={open} onClose={() => setOpen(false)}/>
    }
  </div>
}


export default Sera;






/*const Iconos: React.FC = () => {
  const [open,setOpen] = useState(false)
return <Space>
    <ShoppingCartOutlined onClick={() => setOpen(true)}/>
    {
        open && <Carrito/>
    }
</Space>
};

export default Iconos;*/