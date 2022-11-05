import s from '../Profile/Profile.module.css'
import { Posts } from './Posts/Posts'
import { User } from './User/User'

export const Profile = ({posts}) => {
  return (
    <div className={s.body}>
      <User />
      <Posts posts={posts} />
    </div>
  )
}