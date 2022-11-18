import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Messages } from './components/Messages/Messages';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

function App({ store }) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className='App-content'>
          <Routes>
            <Route path='/profile' element={<Profile
              newPostText={store._state.profilePage.newPostText}
              onChangePostText={store.onChangePostText.bind(store)}
              posts={store._state.profilePage.posts}
              addPost={store.addPost.bind(store)} />} />
            <Route path='/messages/*' element={<Messages
              dialogs={store._state.messagesPage.dialogs}
              messages={store._state.messagesPage.messages} />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
