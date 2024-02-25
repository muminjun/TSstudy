import React from 'react';
import PostItemList from '../components/post/PostItemList';
import { useNavigate } from 'react-router-dom';

const PostPage = () => {
  const navigate = useNavigate()
  return (
    <>
      <h1>게시판</h1>
      <button onClick={() => navigate('/post/create')}>생성하기</button>
      <PostItemList/>
    </>
  );
};

export default PostPage;