import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Messages } from './components/Messages/Messages';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';

function App({dialogs, messages, posts}) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
        <div className='App-content'>
          <Routes>
            <Route path='/profile' element={<Profile posts={posts}/>} />
            <Route path='/messages/*' element={<Messages dialogs={dialogs} messages={messages}/>} />
            <Route path='/news' element={<News/>} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
