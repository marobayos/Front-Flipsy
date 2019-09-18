import React, { useState } from 'react';
import regis from '../Assets/icon.png';
import ConfirmCode from './CodConf'
import { Auth } from 'aws-amplify'

import { Button, Input, Checkbox } from 'antd'


const Registro = () => {
    const [signUpCredentials, setSignUpCredentials] = useState({
        correo: '',
        usuario: '',
        contra: '',
        terminos: false
    })

    const ValidateCredentials = () => {
        signUpCredentials.terminos
            ? handleSubmit()
            : alert("Debes aceptar los términos y condiciones")
    }

    const handleSubmit = async () => {
        const { correo, usuario, contra } = signUpCredentials
        try {
            let newUser = await Auth.signUp({
                username: correo,
                password: contra,
                attributes: {
                    email: correo
                }
            })
            console.log(newUser)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="Registro">
            <div className="wave">

                <div className="img-container">
                    <img src={regis} className="img-regis" alt="logo-registro" />
                </div>
            </div>

            <form className="formRegis" onSubmit={handleSubmit}>

                <section className="inputs-container">
                    <Input
                        className="input"
                        onChange={e => setSignUpCredentials({ ...signUpCredentials, correo: e.target.value })}
                        placeholder="Correo Electrónico"

                    />

                    <Input
                        className="input"
                        onChange={e => setSignUpCredentials({ ...signUpCredentials, usuario: e.target.value })}
                        placeholder="Nombre de Usuario"
                    />

                    <Input
                        className="input"
                        onChange={e => setSignUpCredentials({ ...signUpCredentials, contra: e.target.value })}
                        type="password"
                        placeholder="Contraseña"
                    />
                </section>

                <section className="terms-and-conditions">
                    <Checkbox onChange={e => setSignUpCredentials({ ...signUpCredentials, terminos: e.target.checked })} checked={signUpCredentials.terminos} className="input-checkbox" /> <p>Aceptar Términos y Condiciones</p>
                </section>

                <section className="btn-container">
                    <Button onClick={ValidateCredentials} type="primary"> Registrarse </Button>
                </section>

                <section className="code-container">
                    <p>¿Ya tienes tu código? <a href="#">Ingrésalo aquí</a> </p>
                </section>
            </form>

            {/* <ConfirmCode /> */}
        </div>
    )
}

export default Registro;
