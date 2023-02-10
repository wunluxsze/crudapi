import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import { AppContext } from '../../store/AppContext';
import './index.css';

function PostsPage() {
  const { posts, setPosts } = useContext(AppContext);

  useEffect(() => {
    const fetch = async () => {
      if (posts.length == 0) {
        const response = await api.getPosts();
        setPosts(response);
      }
    };
    fetch();
  }, []);

  const deletePost = (id) => {
    setPosts(posts.filter((item) => item.id !== id));
    api.deletePost();
  };

  return (
    <div className="body">
      {posts.map((item, index, id) => (
        <div className="wrapper">
          <p className="title">{item.title}</p>
          <p className="text">{item.body}</p>
          <button className="button btn" onClick={() => deletePost(item.id)}>
            Удалить
          </button>
          <button className="button">
            <Link className="btn_text" to={`/posts/${index + 1}/`}>
              Подробнее
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default PostsPage;
