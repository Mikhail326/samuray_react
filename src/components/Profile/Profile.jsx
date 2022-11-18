import s from '../Profile/Profile.module.css'
import { Posts } from './Posts/Posts'
import { User } from './User/User'

export const Profile = ({posts, dispatch, newPostText}) => {

  return (
    <div className={s.body}>
      <User />
      <Posts
      newPostText={newPostText}
      dispatch={dispatch}
      posts={posts} 
      />
    </div>
  )
}