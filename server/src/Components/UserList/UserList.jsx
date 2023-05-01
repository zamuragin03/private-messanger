import React from 'react'
import User from '../../UI/User/User'
import cl from './UserList.module.css'
const UserList = () => {
  return (
    <div className={cl.container}>
        <User username={'igor123'} />
        <User username={'alex23'} />
        <User username={'stas123'} />
    </div>
  )
}

export default UserList