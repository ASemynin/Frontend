import { useEffect, useState } from "react"
import "./TargetStyle.css"
import Modal from "../modalWin/Modal";

function TargetItem(props) {
    const [activeState, setActiveState] = useState(false)


    let handleClick = () => {
        setActiveState(prev => !prev)
        localStorage.setItem(props.index, "")
    }

    return (
        <div onClick={() => handleClick()} className={`targetItem ${activeState ? 'active' : ''}`}>

             <div className="targetImg"></div>

            <div className="targetLabel">
                <h3>{props.target.title}</h3>
                <h6>{props.target.description}</h6>
            </div>
        </div>
    )                                                      
}

export default TargetItem
