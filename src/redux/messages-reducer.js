import { rerender } from ".."

const ADD_MESSAGE = 'ADD_MESSAGE'
const ON_CHANGE_MESSAGE_TEXT = 'ON_CHANGE_MESSAGE_TEXT'

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
  ],
  newMessageText: ''
}

export const messagesReducer = (state = initialState, action) => {
  if (action.type === ADD_MESSAGE) {
    const newMessage = {
      id: 4,
      img: 'https://cdn2.vectorstock.com/i/1000x1000/38/31/male-face-avatar-logo-template-pictograph-vector-11333831.jpg',
      name: 'John',
      text: state.newMessageText
    }

    state.messages.push(newMessage)
    rerender()()
  }
  if (action.type === ON_CHANGE_MESSAGE_TEXT) {
    state.newMessageText = action.text
    rerender()()
  }

  return state
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
