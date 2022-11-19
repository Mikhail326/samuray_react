import React from 'react'
import { onChangePostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'

import s from '../Posts/Posts.module.css'
import { Post } from './Post/Post'


export const Posts = ({ posts, dispatch, newPostText }) => {

  const ref = React.createRef()

  const onChangeText = () => {
    dispatch(onChangePostTextActionCreator(ref.current.value))
  }

  const addNewPost = () => {
    dispatch(addPostActionCreator())
  }

  return (
    <div className={s.posts}>
      <div>My Posts</div>
      <div>
        <textarea value={newPostText} onChange={onChangeText} ref={ref} type="text" />
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