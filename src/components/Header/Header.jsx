import s from '../Header/Header.module.css'
import { NavLink } from 'react-router-dom'

export const Header = (props) => {
    return (
        <div className={s.header}>
            <div className={s.img}>
                <img src="https://www.pikpng.com/pngl/b/431-4312020_seven-network-logo-logok-network-commission-aegee-clipart.png" alt="" />
            </div>
            <div className={s.login}>
                {props.isAuth ? <div>
                    <span>{props.login}</span>
                    <button onClick={props.logout}>LOGOUT</button>
                </div> : <NavLink to='/login'>Login</NavLink>}
            </div>
        </div>
    )
}