import React from 'react';
import { Route, Routes } from 'react-router';
import { Link } from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PostPage from './pages/PostPage';
import PostAdd from './pages/PostAdd';

import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <Link className="link" to="/">
            Главная страница
          </Link>
          <Link className="link" to="/add">
            Добавить пост
          </Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/add" element={<PostAdd />} />
      </Routes>
    </div>
  );
}

export default App;
