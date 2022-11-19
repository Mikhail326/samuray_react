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

 let state = store.getState()

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className='App-content'>
          <Routes>
            <Route path='/profile' element={<Profile
              newPostText={state.profilePage.newPostText}
              posts={state.profilePage.posts}
              dispatch={store.dispatch} />} />
            <Route path='/messages/*' element={<Messages
              dialogs={state.messagesPage.dialogs}
              messages={state.messagesPage.messages}
              newMessageText={state.messagesPage.newMessageText}
              dispatch = {store.dispatch}/>}/>
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
