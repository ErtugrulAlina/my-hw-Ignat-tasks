import React, {MouseEvent, useState} from 'react'
import { NavLink } from 'react-router-dom'
import s from "../h5/HW5.module.css"
type SpanType= "PreJunior"|"Junior"|"Junior+"
function Header() {
    const [span, setSpan]=useState<SpanType>("PreJunior")
    const onSpanClick=(e:any)=>{
        setSpan(e.currentTarget.title)
    }
    return (
        <div>
            <div className={s.wrapperMenu}>
                <span className={span==="PreJunior"? s.active : "" } title={"PreJunior"} onClick={onSpanClick}><NavLink to="/pre-junior">PreJunior</NavLink></span>
                <span className={span==="Junior"? s.active : "" } title={"Junior"} onClick={onSpanClick}><NavLink to="/junior">Junior</NavLink></span>
                <span  className={span==="Junior+"? s.active : "" } title={"Junior+"} onClick={onSpanClick}><NavLink to="/junior+">Junior+</NavLink></span>
            </div>
        </div>
    )
}

export default Header
