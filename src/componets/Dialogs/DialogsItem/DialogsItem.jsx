import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './../Dialogs.module.css'

const DialogsItems = (props) => {
    let item = "/dialogs/" + props.id

    return (
        <div className={s.Dialog}>
            <div>
                <img src={props.avatar} />
            </div>
            <div>
                <NavLink to={item}> {props.name} </NavLink>
            </div>
        </div>
    )
}

export default DialogsItems