import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HeaderContainer } from './components/Header/HeaderContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ProfileContainer } from './components/Profile/ProfileContainer';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { MessagesContainer } from './components/Messages/MessagesContainer';
import { UsersContainer } from './components/Users/UsersContainer';

function App() {

  return (

    <div className="App">
      <HeaderContainer />
      <NavBar />
      <div className='App-content'>
        <Routes>
          <Route path="/profile" element={<ProfileContainer />}>
            <Route path=":id" element={<ProfileContainer />} />
          </Route>
          <Route path='/messages/*' element={<MessagesContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/users' element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
