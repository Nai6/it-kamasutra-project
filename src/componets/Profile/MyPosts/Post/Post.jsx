import React from 'react'
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div>
      <div className={style.item}>
        <img src='https://tr.rbxcdn.com/4c792d99df7e8b4fe3d9c30f9aee91c9/768/432/Image/Png' />
        <div className={style.MessageStyle}>
          {props.message}
          <div className={style.TextStyle}>
            <span>Like </span>{props.likeCount}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;