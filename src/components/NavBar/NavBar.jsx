import { NavLink } from 'react-router-dom'
import s from '../NavBar/NavBar.module.css'

export const NavBar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink className={(navData) => navData.isActive ? `${s.activeLink}` : ""} to="/profile">Profile</NavLink>
                </li>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink className={(navData) => navData.isActive ? `${s.activeLink}` : ""} to="/messages">Messages</NavLink>
                </li>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink className={(navData) => navData.isActive ? `${s.activeLink}` : ""} to="/news">News</NavLink>
                </li>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink className={(navData) => navData.isActive ? `${s.activeLink}` : ""} to="/music">Music</NavLink>
                </li>
                <li className={`${s.item} ${s.active}`}>
                    <NavLink className={(navData) => navData.isActive ? `${s.activeLink}` : ""} to="/settings">Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}