import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const PostDetail = () => {
  const {id} = useParams()
  const location = useLocation()
  const post = location.state.post

  return (
    <>
      <div>
        <p>제목 : {post.title}</p>
        <p>내용 : {post.content}</p>
        <p>작성자 : {post.writer}</p>
        <p>좋아요 : {post.isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}</p>
        <p>좋아요 수 : {post.isLikeCnt}개</p>
      </div>
    </>
  );
};

export default PostDetail;