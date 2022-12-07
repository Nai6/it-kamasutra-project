import React from 'react'
import style from './Profile.module.css'
import MyPost from './MyPosts/MyPost'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPost 
      postData={props.postData}
      addPost={props.addPost} />
    </div>
  )
}

export default Profile;