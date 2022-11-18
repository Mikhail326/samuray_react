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
      ]
    },
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      const newPost = {
        id: 1,
        img: 'https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg',
        text: postMessage,
        likes: 3
      }
      this._state.profilePage.posts.push(newPost)
    }
    if (action.type === 'ON-CHANGE-POST-TEXT') {
      this._state.profilePage.newPostText = action.text
    }
  }
}

export const addPostActionCreator = () => {
  return {
    type: 'ADD-POST'
  }
}

export const onChangePostTextActionCreator = (text) => {
  return {
    type: 'ON-CHANGE-POST-TEXT',
    text: text
  }
}