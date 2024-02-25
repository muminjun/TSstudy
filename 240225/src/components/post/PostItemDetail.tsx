import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostType } from './PostItemList';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

type PostProps = {
  post:PostType
}

const PostItemDetail = ({post}:PostProps) => {
  const navigate = useNavigate()
  const { id, writer, title, content, isLike, isLikeCnt } = post

  return (
    <>
      <div onClick={() => navigate(`/post/${id}`, {state:{post}})}>
        <p>작성자 : {writer}</p>
        <p>제목 : {title}</p>
        <p>좋아요 : {isLike ? <FavoriteIcon /> : <FavoriteBorderIcon />}</p>
        <p>좋아요 수 : {isLikeCnt}</p>
        <hr />
      </div>
    </>
  );
};

export default PostItemDetail;