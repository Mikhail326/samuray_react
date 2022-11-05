import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import s from './Messages.module.css'

export const Messages = ({ dialogs, messages }) => {

    return (
        <div className={s.messagesWrapper}>
            <div className={s.users}>
                <ul>
                    {dialogs.map(el => {
                        return <Dialog id={el.id} name={el.name} />
                    })}
                </ul>
            </div>
            <div className={s.messeges}>
                {messages.map(el => {
                    return <Message
                        id={el.id}
                        img={el.img}
                        name={el.name}
                        text={el.text}
                    />
                })}
            </div>
        </div>
    )
}