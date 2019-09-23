import React, { useState, useEffect, useContext } from 'react'
import { Input} from 'antd'
import '../Styles/Searcher.css'
import ProfileList from "./ProfileList";

const Searcher = () => {
    const [verificationCredentials, setVerificationCredentials] = useState({ email: "" })

    const toSearch = () => {
        alert("Link enviado.")


    }

    const { Search } = Input;

    return (
        <div className='searcher-main-container'>
            <div className="search-container">
                <Search
                    placeholder="Busca a tus amigos"
                    onSearch={toSearch}
                    size="large"
                    enterButton />
            </div>

            <ProfileList />
        </div>
    )
}

export default Searcher