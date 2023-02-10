import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../api/api';
import { AppContext } from '../../store/AppContext';

function PostAdd() {
  const { posts, setPosts } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const addPosts = () => {
    api.addPost(title, body).then((res) => {
      setPosts([...posts, res]);
      navigate('/');
    });
  };

  return (
    <div>
      <input value={title} onChange={(event) => setTitle(event.target.value)} type="text" />
      <input value={body} onChange={(event) => setBody(event.target.value)} type="text" />
      <button className="button btn" onClick={() => addPosts()}>
        добавить
      </button>
    </div>
  );
}

export default PostAdd;
