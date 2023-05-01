import React from 'react'
import cls from './User.module.css'

const User = ({username,...props}) => {
  return (
    <div className={cls.user}>
        <h1 className={cls.username}>{username}</h1>
    </div>
  )
}

export default User