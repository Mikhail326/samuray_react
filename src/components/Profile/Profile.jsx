import s from '../Profile/Profile.module.css'
import { PostsContainer } from './Posts/PostsContainer'
import { User } from './User/User'

export const Profile = ({ store }) => {

  return (
    <div className={s.body}>
      <User />
      <PostsContainer store={store} />
    </div>
  )
}