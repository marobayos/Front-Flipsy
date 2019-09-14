import React, { useState, useEffect, useContext } from 'react'
import { Input, Button } from 'antd'
import './Styles/MainLogin.css'
import Login from './Login'

const MainLogin = () => {

    const [loginCredentials, setLoginCredentials] = useState({ email: "", password: "" })

    const Login = () => {
        alert("Loging in")
    }

    return (
        <div className='login-main-container'>
            <div className="img-logo-container">
                <img className="img-logo" src={require('./LogoLogin.PNG')} alt="" />
            </div>

            <section className="form-container">
                <Input className="input" placeholder="Correo Electrónico" onChange={(e) => setLoginCredentials({ ...loginCredentials, email: e.target.value })} />

                <Input className="input" placeholder="Contraseña" onChange={(e) => setLoginCredentials({ ...loginCredentials, password: e.target.value })} type="password" />

            </section>

            <section className="login-btn-container">
                <Button type="primary" onClick={Login}> Iniciar Sesión </Button>
            </section>

            <section className="final-options">
                <p>¿Olvidaste la contraseña? <a href="#"> Click aquí </a> </p>
                <p>¿No tiene cuenta? <a href="#"> Regístrate aquí </a> </p>
            </section>
        </div>
    )
}

export default MainLogin