import React, {useContext, useEffect} from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';
import Chat from '../Chat/Chat'
import cl from './Menu.modules.css'
import Header from '../Header/Header'
import UserList from '../UserList/UserList'
import ApplyButton from '../../UI/Buttons/ApplyButton/ApplyButton'
import AuthContext from '../../Context/AuthContext'

const Menu = () => {
  let { logoutUser, isAuthorized  } = useContext(AuthContext)
  let navigate = useNavigate()
  useEffect(() => {
    if(!isAuthorized){
        navigate('/')
    }
  }, [isAuthorized]);
    return (
        <div className={cl.container}>
            <ApplyButton onClick={()=> logoutUser()} >Logout</ApplyButton>
            <Header/>
            <div className={cl.Chats}>
               <UserList/>
            </div>
            <div className={cl.Dialog}>
                <Chat />

            </div>
        </div>
    )
}

export default Menu