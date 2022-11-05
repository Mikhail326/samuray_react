import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const dialogs = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Frenck' },
  { id: 3, name: 'Mery' }
]

const messages = [
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

const posts = [
  {id:1,
  img: 'https://unaaonline.org/wp-content/uploads/2021/11/unaa-team-lead.jpg',
  text: 'How are you?',
  likes: 3
  }
]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
