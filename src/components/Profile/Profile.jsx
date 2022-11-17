import s from '../Profile/Profile.module.css'
import { Posts } from './Posts/Posts'
import { User } from './User/User'

export const Profile = ({posts, addPost, onChangePostText, newPostText}) => {
  return (
    <div className={s.body}>
      <User />
      <Posts
      newPostText={newPostText}
      onChangePostText={onChangePostText}
      posts={posts} 
      addPost={addPost}
      />
    </div>
  )
}