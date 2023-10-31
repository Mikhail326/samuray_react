import React from 'react'
import s from '../Posts/Posts.module.css'
import { Post } from './Post/Post'
import { PostsReduxForm } from './PostsForm/PostsForm'


export const Posts = ({ profilePage, onAddNewPost}) => {

  const onSubmit = (formData) => {
    onAddNewPost(formData.text)
  }
  
  return (
    <div className={s.posts}>
      <div>My Posts</div>
      <PostsReduxForm onSubmit={onSubmit} />
      <div>
        {profilePage.posts.map(el => {
          return <div key={el.id}>
            <Post
              id={el.id}
              img={el.img}
              text={el.text}
              like={el.likes}
            />
          </div>
        })}
      </div>
    </div>
  )
}

