import s from '../NavBar/NavBar.module.css'

export const NavBar = () => {
    return (
        <div className={s.navbar}>
            <ul className={s.list}>
                <li className={s.item}>Profile</li>
                <li className={`${s.item} ${s.active}`}>Dialogs</li>
            </ul>
        </div>
    )
}