import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Context from '../GlobalState/context'
import { withRouter } from 'react-router-dom'
import '../Styles/Home.css'
import { Input } from 'antd';

const { Search } = Input;
const { Header, Footer, Sider, Content } = Layout;

const Home = props => {

    const { state, actions } = useContext(Context)

    return (
        <Layout>
            <Header className = "header">
                <img className = "logo" src={require("../Assets/Logo-blanco.PNG")} alt="Notificaciones"/>
                <img className = "notifications" src={require("../Assets/menu-button.svg")} alt="Notificaciones"/>
            </Header>

            <div className = "search">
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                />
            </div>

            <Content>Content</Content>

            <Footer className="footer">
                <img className = "footer-item" src={require("../Assets/home.svg")} alt="Notificaciones"/>
                <img className = "footer-item" src={require("../Assets/friends.svg")} alt="Notificaciones"/>
                <img className = "footer-item-selected" src={require("../Assets/search.svg")} alt="Notificaciones"/>
                <img className = "footer-item" src={require("../Assets/profile.svg")} alt="Notificaciones"/>
                <img className = "footer-item" src={require("../Assets/Notification.svg")} alt="Notificaciones"/>
            </Footer>
        </Layout>
    )
}

export default withRouter(Home)