import s from '../Post/Post.module.css'

export const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.post_user}>
                <img src="https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg" alt="" />
                <div>Hi, How Are You?</div>
            </div>
            <div>
                like 0
            </div>
        </div>
    )
}