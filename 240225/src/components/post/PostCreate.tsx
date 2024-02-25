import React, {useState, useRef, useEffect} from 'react';

const PostCreate = () => {
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null)

  const handleChangeTitle =(e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  
  const handleChangeContent = (e:React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  const handleSubmitPost = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(1)
  }

  // const handleFileBtn = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   if(fileRef.current) {
  //     fileRef.current.click()
  //   }
  // }
  

  // const handleFileBtn = (e:React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault()
  //   if (e.target.files) {
  //     const file = e.target.files[0]
  //     const reader = new FileReader()
  //     reader.onloadend = () => {
  //       setPreviewUrl(reader.result);
  //     };
  
  //     if (file) {
  //       reader.readAsDataURL(file);
  //     }
  //   }
  // }

  return (
    <>
      <h1>생성하기</h1>
      <form onSubmit={handleSubmitPost}>
        제목 : <input 
          type="text" 
          value={title}
          onChange={handleChangeTitle}
        />
        내용 : <input 
          type="text" 
          value={content}
          onChange={handleChangeContent}
        />

        사진 : <input 
          type="file"
          ref={fileRef}
          // onChange={handleFileBtn}

        />

        <button>저장</button>
      </form>
    </>
  );
};

export default PostCreate;