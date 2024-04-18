import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Buscar from "./components/search";
import Navegacion from "./components/navbar";
import Sera from "./components/icono";
import Carrito from "./components/cart";
import Category from "./components/categorias";
import Signup from "./components/signup";
import Login from "./components/login";
import Out from "./components/signout";

const { Header, Content, Footer } = Layout;

const Layoutf = () => {
    return (
        <Layout>
            <div><Navegacion /></div>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signout" element={<Out />} />
                    <Route path="/"/>
                    <Route path="/"/>
                </Routes>
            </Router>
            <Footer style={{ textAlign: 'center' }}>
                E-Commerce ©{new Date().getFullYear()} Created by Xavier
            </Footer>
        </Layout>
    )
}

export default Layoutf


