import s from './Message.module.css'

export const Message = ({img, name, text}) => {
    console.log(img)
    return (
        <div className={s.message}>
            <div className={s.userInfo}>
                <img src={img} alt="" />
                <span>{name}</span>
            </div>
            <div className={s.messageText}>
                {text}
            </div>
        </div>
    )
}