import React from 'react'
import { onChangeMessageTextActionCreator, addMessageActionCreatot } from '../../redux/messages-reducer'

import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import s from './Messages.module.css'

export const Messages = ({ dialogs, messages, dispatch, newMessageText }) => {

    const ref = React.createRef()

    const onChangeValue = () => {
        dispatch(onChangeMessageTextActionCreator(ref.current.value))
    }

    const addMessage = () => {
        dispatch(addMessageActionCreatot())
    }

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
                <div>
                    <textarea ref={ref} value={newMessageText} onChange={onChangeValue}></textarea>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}