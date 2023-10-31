import React from 'react'
import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import s from './Messages.module.css'
import { MessageReduxForm } from './SendMessage/SendMessage'

export const Messages = ({ onAddMessage, messagesPage }) => {
   
    const onSubmit = (formData) => {
        onAddMessage(formData.text)
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
                <MessageReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
