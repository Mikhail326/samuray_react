import React from 'react'

import s from '../Posts/Posts.module.css'
import { Post } from './Post/Post'


export const Posts = ({ posts, newPostText, onAddNewPost, onChangeText }) => {

  const ref = React.createRef()

  const changeText = () => {
    const text = ref.current.value
    onChangeText(text)
  }

  const addNewPost = () => {
    onAddNewPost()
  }

  return (
    <div className={s.posts}>
      <div>My Posts</div>
      <div>
        <textarea value={newPostText} onChange={changeText} ref={ref} type="text" />
        <button onClick={addNewPost}>Add Post</button>
      </div>
      <div>
        {posts.map(el => {
          return <Post
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