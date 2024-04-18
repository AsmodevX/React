import Test1 from "./components/incremento";
import Test2 from "./components/carrusel";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Lista from "./components/list";

const { Header, Content, Footer } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const LayoutApp: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
        <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Test1 />} />
                <Route path ="/about" element ={<Test2 />} />
                <Route path="/product" element={<Lista />} />
            </Routes>
        </Router>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        E-Commerce ©{new Date().getFullYear()} Created by Xavier
      </Footer>
    </Layout>
  );
};

export default LayoutApp;