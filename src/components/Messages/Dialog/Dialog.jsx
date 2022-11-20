import { NavLink } from "react-router-dom"
import s from './Dialog.module.css'

export const Dialog = ({ name, id }) => {

    let urlId = id.toString()

    return (
        <li><NavLink to={urlId} className={({ isActive }) => isActive ? `${s.activeUser}` : ""}>{name}</NavLink></li>
    )
}