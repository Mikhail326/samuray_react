import React from 'react'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import s from './Messages.module.css'

export const Messages = ({ onChangeValue, onAddMessage, messagesPage }) => {

    const ref = React.createRef()

    const changeMessageValue = () => {
        const text = ref.current.value
        onChangeValue(text)
    }

    const addMessage = () => {
        onAddMessage()
    }

    return (
        <div className={s.messagesWrapper}>
            <div className={s.users}>
                <ul>
                    {messagesPage.dialogs.map(el => {
                        return <Dialog id={el.id} name={el.name} />
                    })}
                </ul>
            </div>
            <div className={s.messeges}>
                {messagesPage.messages.map(el => {
                    return <Message
                        id={el.id}
                        img={el.img}
                        name={el.name}
                        text={el.text}
                    />
                })}
                <div>
                    <textarea ref={ref} value={messagesPage.newMessageText} onChange={changeMessageValue}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}