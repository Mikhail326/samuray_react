import { Posts } from "./Posts"
import { onChangePostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'

export const PostsContainer = ({ store }) => {

  const state = store.getState().profilePage

  const onChangeText = (text) => {
    store.dispatch(onChangePostTextActionCreator(text))
  }

  const onAddNewPost = () => {
    store.dispatch(addPostActionCreator())
  }

  return (
    <Posts state={state}
      onChangeText={onChangeText}
      onAddNewPost={onAddNewPost}/>
  )
}