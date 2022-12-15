import { Posts } from "./Posts"
import { onChangePostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer'
import { connect } from "react-redux"


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onChangeText: (text) => {
      dispatch(onChangePostTextActionCreator(text))
    },
    onAddNewPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)