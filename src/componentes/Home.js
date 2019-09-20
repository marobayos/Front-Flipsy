import React, { useState, useEffect, useContext } from 'react'
import Context from '../GlobalState/context'
import { withRouter } from 'react-router-dom'
import '../Styles/Home.css'


const Home = props => {

    const { state, actions } = useContext(Context)

    return (
        <div className='home-main-container'>
            <section className="home-animation-container">
                <h2 style={{ color: 'white' }}>¡Bienvenido a Flipsy!</h2>
            </section>
        </div>
    )
}

export default withRouter(Home)