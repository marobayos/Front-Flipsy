import {List,Avatar} from 'antd'
import React from 'react'
import '../Styles/ProfileList.css'

const ProfileList = () => {

    const data = [
        {
            name: 'Ronald',
        },
        {
            name: 'Juan',
        },
        {
            name: 'Organista',
        },
        {
            name: 'Camilo',
        },
        {
            name: 'Maria',
        },
        {
            name: 'Cristian'
        },
        {
            name: 'Brayan',
        },
    ];

    return (
        <div className='list-main-container'>

            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            color="white"
                            avatar={<Avatar size={64} icon="user" />}
                            title={item.name}
                        />
                    </List.Item>
                )}
            />
        </div>
    )
};
export default ProfileList