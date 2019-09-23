import React, { useState } from 'react'
import {Avatar} from 'antd'
import '../Styles/Verification.css'

const Profile = () => {
    const [verificationCredentials, setVerificationCredentials] = useState({ email: "" })

    const toSearch = () => {
        alert("Link enviado.")
    }

    return (
        <div className='searcher-main-container'>
            <div className="avatar-container">
                <Avatar size={64} icon="user" />

            </div>
        </div>
    )
}

export default Profile