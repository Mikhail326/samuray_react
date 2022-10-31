import s from '../User/User.module.css'

export const User = () => {
    return (
        <div className={s.user}>
            <div className={s.user_background}>
                <img src="https://catherineasquithgallery.com/uploads/posts/2021-02/1612731927_212-p-fon-sochetayushchiisya-s-golubim-245.jpg" alt="" />
            </div>
            <div className={s.user_description}>
                ava + description
            </div>
        </div>
    )
}