import "./TargetStyle.css"
import TargetItem from "./TargetItem"
import { useState, useEffect } from "react"

function Targets(props) {
    return (
        <div id="targets" className="targets">
             <h1>Цели на смену</h1>
             <div className="targetsView">
             {props.target_data.map((item, idx) => {
              return(
                  <div key={idx}>
                      <TargetItem target={item} index={idx}/>
                  </div>
              )
             })}
             </div>
        </div>
    )
}

export default Targets