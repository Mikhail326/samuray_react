import { Posts } from "./Posts"
import { addPostActionCreator } from '../../../redux/profile-reducer'
import { connect } from "react-redux"


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
    onAddNewPost: (postText) => {
      dispatch(addPostActionCreator(postText))
    }
  }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)