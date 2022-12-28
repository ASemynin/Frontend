import "./ManagersStyle.css"
                //JSON_Files//
import directors from "../../media/managers/directorAndHr/profiler.json"
import peoples from "../../media/managers/people/profiler.json"
import productions from "../../media/managers/production/profiler.json"
import services from "../../media/managers/service/profiler.json"
                //SWG_import//
import crown from "../../media/images/crown.svg"
import {HandySvg} from 'handy-svg'
                //DirectorAndHR//
import virodov from "../../media/managers/directorAndHr/virodov.jpg"
                    //People//
import iudin from "../../media/managers/people/iudin.jpg"
import schepkina from "../../media/managers/people/schepkina.jpg"
import makarov from "../../media/managers/people/makarov.jpg"
                 //Production//
import buslov from "../../media/managers/production/buslov.jpg"
import korotov from "../../media/managers/production/korotov.jpg"
import nefedova from "../../media/managers/production/nefedova.jpg"
import orlova from "../../media/managers/production/orlova.jpg"
import usachev from "../../media/managers/production/usachev.jpg"
                  //Service//
import glushenkova from "../../media/managers/service/glushenkova.jpg"
import maksimova from "../../media/managers/service/maksimova.jpg"
import mihova from "../../media/managers/service/mihova.jpg"
import slesarev from "../../media/managers/service/slesarev.jpg"



export const director = () => {
    return(
        <>
            {directors.map((item, idx) => {
            return(
            <div className="manager" key={idx}>
                <img src={switchCase(item.path)} alt="Director And Hr Managers" width={330} height={450} className="managersImage"/>
                <div className="assistant">
                <p className="name">{item.name}  {item.surname}</p>
                {item.assistant ? <HandySvg src={crown} className="assistantIcon" width="30" height="30"/> : ''}
                </div>
                <p className="departament">{item.departament}</p>
                <p className="line"></p>
            </div>
            )})}
        </>
    )
}

export const people = () => {
    return(
        <>
            {peoples.map((item, idx) => {
            return(
            <div className="manager" key={idx}>
                <img src={switchCase(item.path)} alt="People Managers" width={330} height={450} className="managersImage"/>
                <div className="assistant">
                <p className="name">{item.name}  {item.surname}</p>
                {item.assistant ? <HandySvg src={crown} className="assistantIcon" width="30" height="30"/> : ''}
                </div>
                <p className="departament">{item.departament}</p>
                <p className="line"></p>
            </div>
            )})}
        </>
    )
}

export const production = () => {
    return(
        <>
            {productions.map((item, idx) => {
            return(
            <div className="manager" key={idx}>
                <img src={switchCase(item.path)} alt="Production Managers" width={330} height={450} className="managersImage"/>
                <div className="assistant">
                <p className="name">{item.name}  {item.surname}</p>
                {item.assistant ? <HandySvg src={crown} className="assistantIcon" width="30" height="30"/> : ''}
                </div>
                <p className="departament">{item.departament}</p>
                <p className="line"></p>
            </div>
            )})}
        </>
    )
}

export const service = () => {
    return(
        <>
            {services.map((item, idx) => {
            return(
            <div className="manager" key={idx}>
                <img src={switchCase(item.path)} alt="Services Managers" width={330} height={450} className="managersImage"/>
                <div className="assistant">
                <p className="name">{item.name}  {item.surname}</p>
                {item.assistant ? <HandySvg src={crown} className="assistantIcon" width="30" height="30"/> : ''}
                </div>
                <p className="departament">{item.departament}</p>
                <p className="line"></p>
            </div>
            )})}
        </>
    ) 
}

const switchCase = (path) => {
    switch(path) {
        case 'virodov':
          return virodov 
        case 'iudin':
          return iudin
        case 'makarov':
          return makarov
        case 'schepkina':
          return schepkina
        case 'buslov':
            return buslov
        case 'korotov':
           return korotov
        case 'nefedova':
            return nefedova
        case 'orlova':
           return orlova        
        case 'usachev':
            return usachev
        case 'glushenkova':
            return glushenkova
         case 'maksimova':
            return maksimova
        case 'mihova':
            return mihova
        case 'slesarev':
            return slesarev
        default:
          return null
      }
}
