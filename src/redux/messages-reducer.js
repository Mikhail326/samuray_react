const ADD_MESSAGE = 'ADD_MESSAGE'

const initialState = {
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
}

export const messagesReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    const newMessage = {
      id: 4,
      img: 'https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg',
      name: 'John',
      text: action.message
    }
    return {
      ...state,
      messages: [...state.messages, newMessage],
    }
  }

  return state
}


export const addMessageActionCreator = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}