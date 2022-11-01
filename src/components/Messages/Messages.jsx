import { Dialog } from './Dialog/Dialog'
import { Message } from './Message/Message'
import s from './Messages.module.css'

export const Messages = () => {
    return (
        <div className={s.messagesWrapper}>
            <div className={s.users}>
                <ul>
                    <Dialog name='John' id='1' />
                    <Dialog name='Frenck' id='2' />
                    <Dialog name='Mery' id='3' />
                </ul>
            </div>
            <div className={s.messeges}>
                <Message img='https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg'
                    name='John'
                    text='Hello Samuray. How are you?'
                />

                <Message img='https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg'
                    name='Me'
                    text='Hello, John!'
                />

                <Message img='https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg'
                    name='John'
                    text='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
                />
            </div>
        </div>
    )
}