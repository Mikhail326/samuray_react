import s from '../Profile/Profile.module.css'
import { PostsContainer } from './Posts/PostsContainer'
import { User } from './User/User'

export const Profile = ({profile}) => {
  console.log(profile)
  return (
    <div className={s.body}>
      <User profile={profile} />
      <PostsContainer />
    </div>
  )
}