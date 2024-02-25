import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PostPage from './pages/PostPage';
import PostDetail from './components/post/PostDetail';
import PostCreate from './components/post/PostCreate';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>} />
          <Route path='about' element={<AboutPage/>}/>
          <Route path='post'>
            <Route index element={<PostPage/>}/>
            <Route path=':id' element={<PostDetail/>}/>
            <Route path='create' element={<PostCreate/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
