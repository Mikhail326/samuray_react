import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { Profile } from './components/Profile/Profile';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { MessagesContainer } from './components/Messages/MessagesContainer';

function App() {

  return (

    <div className="App">
      <Header />
      <NavBar />
      <div className='App-content'>
        <Routes>
          <Route path='/profile' element={<Profile />} />
          <Route path='/messages/*' element={<MessagesContainer />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
