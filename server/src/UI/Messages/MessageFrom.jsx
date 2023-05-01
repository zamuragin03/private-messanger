import React from 'react'
import cls from './Message.module.css'

const MessageFrom = ({text, sent_date, user, ...pops}) => {
    return (
        <div className={cls.fromcontainer}>
            <span className={cls.text} >{text}</span>
            <h4 className={cls.time} >{sent_date.toLocaleTimeString().substring(0,5)}</h4>
        </div>
    )
}

export default MessageFrom