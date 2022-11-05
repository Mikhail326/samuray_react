import { NavLink } from "react-router-dom"
import s from './Dialog.module.css'

export const Dialog = ({name, id}) => {
    
    return (
        <li><NavLink className={(navData) => navData.isActive ? `${s.activeUser}` : ""} to={id}>{name}</NavLink></li>
    )
}