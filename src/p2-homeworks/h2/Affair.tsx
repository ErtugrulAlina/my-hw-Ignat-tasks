import React from 'react'
import {AffairType} from "./HW2";
import s from "./Affairs.module.css"

type AffairPropsType = {
    key: number
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number)=> void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (id: number) => {props.deleteAffairCallback(id) }// need to fix
const priorityClass = s.item + " "+ s[props.affair.priority]
    return (
        <div className={s.wrapperAffair}>
            <div className={s.affairItem}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>

            <button className={s.deleteButton} onClick={()=>deleteCallback(props.affair._id)}>Delete</button>
        </div>
    )
}

export default Affair
