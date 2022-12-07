import React from 'react'
import style from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return <nav className={style.nav}>
    <div>
      <NavLink to='/profile' className={Nav => Nav.isActive ? style.active : style.item}>Profile</NavLink>
    </div>
    <div>
      <NavLink to='/dialogs/*' className={Nav => Nav.isActive ? style.active : style.item}>Massage</NavLink>
    </div>
    <div>
      <NavLink to='/news' className={Nav => Nav.isActive ? style.active : style.item}>News</NavLink>
    </div>
    <div>
      <NavLink to='/music' className={Nav => Nav.isActive ? style.active : style.item}>Music</NavLink>
    </div>
    <div>
      <NavLink to='/settings' className={Nav => Nav.isActive ? style.active : style.item}>Settings</NavLink>
    </div>
  </nav>
}

export default Nav;