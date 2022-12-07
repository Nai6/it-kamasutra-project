import React from 'react';
import s from './Dialogs.module.css'
import DialogsItems from './DialogsItem/DialogsItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElement = props.dialogsData.map(d => <DialogsItems name={d.name} id={d.id} avatar={d.avatar} key={d.id} />);
    let messageElement = props.messageData.map(m => <Message message={m.message} key={m.id} />);

    let newMessageElement = React.createRef();

    let NewMessage = () =>{
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={s.Dialog}>
            <div className={s.DialogsItem}>
                {dialogsElement}
            </div>
            <div className={s.Messages}>
                {messageElement}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={NewMessage}>Send</button>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;