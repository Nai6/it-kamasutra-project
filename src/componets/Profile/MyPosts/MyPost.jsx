import React from 'react'
import style from './MyPost.module.css'
import Post from './Post/Post.jsx'


const MyPost = (props) => {

let postElement = props.postData.map (p =><Post message={p.message} likeCount={p.likeCount} /> )

let newPostElement = React.createRef();

let addPost = () => {
  debugger;
  let text = newPostElement.current.value;
  props.addPost(text);
  newPostElement.current.value = ''
}

  return (
    <div className={style.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div>
        {postElement}
      </div>
    </div>
  )
}

export default MyPost;