const ADD_POST = 'ADD_POST'
const ON_CHANGE_POST_TEXT = 'ON_CHANGE_POST_TEXT'

const initialState = {
  posts: [
    {
      id: 1,
      img: 'https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg',
      text: 'How are you?',
      likes: 3
    }
  ],
  newPostText: ''
}

export const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const newPost = {
      id: 1,
      img: 'https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg',
      text: state.newPostText,
      likes: 3
    }
    state.posts.push(newPost)
  }
  if (action.type === ON_CHANGE_POST_TEXT) {
    state.newPostText = action.text
  }

  return state
}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}

export const onChangePostTextActionCreator = (text) => {
  return {
    type: ON_CHANGE_POST_TEXT,
    text: text
  }
}