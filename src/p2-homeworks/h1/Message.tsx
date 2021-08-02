import React from 'react';
import s from "./Message.module.css"

type PropTypes = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: PropTypes) {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.message}>
                <div className={s.name}>{props.name}</div>
                <div className={s.message_text}>{props.message}
                    <div className={s.time}>{props.time}</div>
                </div>


            </div>

        </div>
    )
}

export default Message
