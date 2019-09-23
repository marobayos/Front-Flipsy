import React, { useState} from 'react'
import {Input, Layout} from 'antd'
import '../Styles/Searcher.css'
import '../Styles/Home.css'
import ProfileList from "./ProfileList";

const { Header, Footer} = Layout;

const Searcher = () => {
    const [verificationCredentials, setVerificationCredentials] = useState({ email: "" })

    const toSearch = () => {

    }

    const { Search } = Input;

    return (
        <div className='searcher-main-container'>
            <Layout>

                <Header className = "header">
                    <img className = "logo" src={require("../Assets/Logo-blanco.PNG")} alt="Notificaciones"/>
                    <img className = "notifications" src={require("../Assets/menu-button.svg")} alt="Notificaciones"/>
                </Header>
                <div className="search-container">
                    <Search
                        placeholder="Busca a tus amigos"
                        onSearch={toSearch}
                        size="large"
                        enterButton />
                </div>

                <ProfileList />
                <Footer className="footer">
                    <img className = "footer-item" src={require("../Assets/home.svg")} alt="Notificaciones"/>
                    <img className = "footer-item" src={require("../Assets/friends.svg")} alt="Notificaciones"/>
                    <img className = "footer-item-selected" src={require("../Assets/search.svg")} alt="Notificaciones"/>
                    <img className = "footer-item" src={require("../Assets/profile.svg")} alt="Notificaciones"/>
                    <img className = "footer-item" src={require("../Assets/Notification.svg")} alt="Notificaciones"/>
                </Footer>
            </Layout>
        </div>
    )
}

export default Searcher