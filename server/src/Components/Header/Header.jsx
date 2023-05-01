import React, {useContext} from 'react'
import AuthContext from '../../Context/AuthContext'
import cls from './Header.module.css'
const Header = ({...props}) => {
  let { user,isAuthorized } = useContext(AuthContext)

  return (
    <div >
        <h1 className={cls.logged}>hello {user}!</h1>
    </div>
  )
}

export default Header