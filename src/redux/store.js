const ADD_POST = 'ADD_POST'
const ON_CHANGE_POST_TEXT = 'ON_CHANGE_POST_TEXT'
const ADD_MESSAGE = 'ADD_MESSAGE'
const ON_CHANGE_MESSAGE_TEXT = 'ON_CHANGE_MESSAGE_TEXT'

export const store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          img: 'https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg',
          text: 'How are you?',
          likes: 3
        }
      ],
      newPostText: ''
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: 'John' },
        { id: 2, name: 'Frenck' },
        { id: 3, name: 'Mery' }
      ],
      messages: [
        {
          id: 1,
          img: 'https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg',
          name: 'John',
          text: 'Hello Samuray. How are you?'
        },
        {
          id: 2,
          img: 'https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg',
          name: 'Me',
          text: 'Hello, John!'
        },
        {
          id: 3,
          img: 'https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg',
          name: 'John',
          text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
        }
      ],
      newMessageText: ''
    },
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      const newPost = {
        id: 1,
        img: 'https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg',
        text: this._state.profilePage.newPostText,
        likes: 3
      }
      this._state.profilePage.posts.push(newPost)
    }
    if (action.type === ON_CHANGE_POST_TEXT) {
      this._state.profilePage.newPostText = action.text
    }
    if(action.type === ADD_MESSAGE) {
      const newMessage = {
          id: 4,
          img: 'https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg',
          name: 'John',
          text: this._state.messagesPage.newMessageText
        }
      
      this._state.messagesPage.messages.push(newMessage)
    }
    if(action.type === ON_CHANGE_MESSAGE_TEXT) {
      this._state.messagesPage.newMessageText = action.text
    }
  }
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

export const addMessageActionCreatot = () => {
  return {
    type: ADD_MESSAGE,
  }
}

export const onChangeMessageTextActionCreator = (text) => {
  return {
    type: ON_CHANGE_MESSAGE_TEXT,
    text: text
  }
}
