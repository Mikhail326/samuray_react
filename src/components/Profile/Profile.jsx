import s from '../Profile/Profile.module.css'
import { Post } from './Post/Post'
import { Posts } from './Posts/Posts'
import { User } from './User/User'

export const Profile = () => {
    return (
        <div className={s.body}>
            <User />
            <Posts />
            <Post />
        </div>
    )
}