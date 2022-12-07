import './App.css';
import React from 'react'
import Header from './componets/Header/Header';
import Nav from './componets/Nav/Nav';
import Profile from './componets/Profile/Profile';
import Dialogs from './componets/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Music from './componets/Music/Music';
import News from './componets/News/News';
import Settings from './componets/Settings/Settings';
import { addPost } from './redux/state';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/'
              element={<Profile 
              postData={props.state.profilePage.postData}
              addPost={props.addPost} />} />
            <Route path='/dialogs/*'
              element={<Dialogs
                dialogsData={props.state.dialogsPage.dialogsData}
                messageData={props.state.dialogsPage.messageData} />} />
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
