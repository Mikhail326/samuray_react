import { NavLink } from "react-router-dom"
import s from './Dialog.module.css'

export const Dialog = ({name, id}) => {
    return (
        <li><NavLink  to={id} className={({ isActive }) => isActive ? `${s.activeUser}` : ""}>{name}</NavLink></li>
    )
}