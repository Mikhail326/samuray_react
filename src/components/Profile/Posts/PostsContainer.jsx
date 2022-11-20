import { Posts } from "./Posts"
import { onChangePostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'

export const PostsContainer = ({ store }) => {

  const state = store.getState()

  const onChangeText = (text) => {
    store.dispatch(onChangePostTextActionCreator(text))
  }

  const onAddNewPost = () => {
    store.dispatch(addPostActionCreator())
  }

  return (
    <Posts posts={state.profilePage.posts}
      onChangeText={onChangeText}
      onAddNewPost={onAddNewPost}
      newPostText={state.profilePage.newPostText} />
  )
}