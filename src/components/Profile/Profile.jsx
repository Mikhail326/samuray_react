import React from 'react'
import s from '../Profile/Profile.module.css'
import { PostsContainer } from './Posts/PostsContainer'
import { User } from './User/User'

export const Profile = ({profile, status, updateStatus}) => {
  return (
    <div className={s.body}>
      <User profile={profile} status={status} updateStatus={updateStatus} />
      <PostsContainer />
    </div>
  )
}