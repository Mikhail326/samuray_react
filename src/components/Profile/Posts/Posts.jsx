import s from '../Posts/Posts.module.css'
import { Post } from './Post/Post'

export const Posts = ({posts}) => {
  return (
    <div className={s.posts}>
      <div>My Posts</div>
      <div>
        <textarea type="text" />
        <button>Add Post</button>
      </div>
      <div>
        {posts.map(el=> {
          return  <Post
          id={el.id}
          img={el.img}
          text={el.text}
          like={el.likes}
        />
        })}
      </div>
    </div>
  )
}