import React, {useState} from 'react';
import PostItemDetail from './PostItemDetail';

export type PostType = {
  id:number,
  writer:string,
  title:string,
  content:string,
  isLike:boolean,
  isLikeCnt:number,
}

const PostItemList = () => {
  const [postList, setPostList] = useState<PostType[]>([
    {
      id:1,
      writer:'작성자11',
      title:"제목111",
      content:"내용1111",
      isLike:true,
      isLikeCnt:1,
    },
    {
      id:2,
      writer:'작성자22',
      title:"제목222",
      content:"내용2222",
      isLike:false,
      isLikeCnt:2,
    },
    {
      id:3,
      writer:'작성자33',
      title:"제목333",
      content:"내용3333",
      isLike:true,
      isLikeCnt:3,
    },
    {
      id:4,
      writer:'작성자44',
      title:"제목444",
      content:"내용4444",
      isLike:false,
      isLikeCnt:4,
    },
    {
      id:5,
      writer:'작성자55',
      title:"제목555",
      content:"내용5555",
      isLike:false,
      isLikeCnt:5,
    },
  ])

  return (
    <>
      {postList.map((post) => (
        <PostItemDetail key={post.id} post={post}/>
      ))}
    </>
  );
};

export default PostItemList;