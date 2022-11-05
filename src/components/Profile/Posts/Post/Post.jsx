import s from '../Post/Post.module.css'

export const Post = ({img, text, like}) => {
    return (
        <div className={s.post}>
            <div className={s.post_user}>
                <img src={img} alt="" />
                <div>{text}</div>
            </div>
            <div>
                like {like}
            </div>
        </div>
    )
}