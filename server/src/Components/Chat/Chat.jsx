import React, {useContext} from 'react'
import AuthContext from '../../Context/AuthContext'
import MessageFrom from '../../UI/Messages/MessageFrom'
import MessageTo from '../../UI/Messages/MessageTo'
import cls from './Chat.module.css'
const Chat = () => {
  let { user,isAuthorized } = useContext(AuthContext)
  return (
    <div className={cls.message_container}>
        {/* hello {user} */}
        <MessageFrom text={'hello fвыалдиываигщиаукgbr1fffffffffffff'} sent_date={new Date()}/>
        <MessageTo  text={'hello useлоивашываищгуника9укиаш каиукаиваваывлаоиущкариr3'} sent_date= {new Date()} />
        <MessageFrom text={'hello fвыалдиываигщиаукgbr1fffffffffffff'} sent_date={new Date()}/>
        <MessageFrom text={'hello fвыалдиываигщиаукgbr1fffffffffffff'} sent_date={new Date()}/>

        <MessageTo  text={'hello useлоивашываищгуника9укиаш каиукаиваваывлаоиущкариr3'} sent_date= {new Date()} />
    </div> 
  )
}

export default Chat