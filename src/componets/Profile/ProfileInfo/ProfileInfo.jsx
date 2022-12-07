import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div className={style.content}>
      <div>
        <img src='https://images.rbxcdn.com/d66ae37d46e00a1ecacfe9531986690a.jpg' />
      </div>
      <div className={style.ProfileBlock}>
        <div>
          avatart + descriptions
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;