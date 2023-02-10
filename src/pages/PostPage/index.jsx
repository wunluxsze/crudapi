import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import api from '../../api/api';
import { AppContext } from '../../store/AppContext';

function PostPage() {
  const params = useParams();
  const { posts, setPosts } = useContext(AppContext);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [edit, setEdit] = useState(false);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    const fetch = async () => {
      const res = await api.getPost(params.id);
      const postcomments = await api.getComments(params.id);
      setPost(res);
      setComments(postcomments);
    };
    fetch();
  }, []);

  const editPost = async () => {
    if (edit) {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: post.id,
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setPost(json);
          setPosts(posts.map((item) => (item.id === post.id ? json : item)));
        });
      setEdit(false);
    } else {
      setEdit(true);
      setTitle(post.title);
      setBody(post.body);
    }
  };

  if (post === null) {
    return null;
  }

  return (
    <div className="wrapper">
      <button onClick={editPost}>{edit ? 'Сохранить' : 'Редактировать'}</button>
      {edit ? (
        <>
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
          <textarea value={body} onChange={(event) => setBody(event.target.value)}></textarea>
        </>
      ) : (
        <>
          <p className="title">{post.title}</p>
          <p className="text">{post.body}</p>
        </>
      )}
      {comments.map((item) => (
        <div>
          <p className="comment__name">{item.email}:</p>
          <p className="comment__body">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostPage;
