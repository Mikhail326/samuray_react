import style from './Users.module.css'
import userPhoto from '../../img/userPhoto.png'
import preloader from '../../img/preloader.gif'
import { NavLink } from 'react-router-dom'

export const Users = ({ totalUsersCount, pageSize, selectedUsersPage, selectedPage, users, follow, unfollow, statusPreloader }) => {
  let countPage = Math.ceil(totalUsersCount / pageSize)
  let arrPagesCount = []

  for (let i = 1; i <= countPage; i++) {
    arrPagesCount.push(i)
  }

  return (<div>
    {statusPreloader ? <div className={style.preloader}>
      <img src={preloader} alt="" />
    </div> : <div>
      <div className={style.pagination}>
        {arrPagesCount.map(el => {
          return <span key={el} onClick={() => selectedUsersPage(el)} className={selectedPage === el && style.selectedPage}>{el}</span>
        })}
      </div>
      {users.map(el => <div key={el.id}>
        <div className={style.photo}>
          <NavLink to={'/profile'}>
            <img src={el.photos.small == null ? userPhoto : el.photos.small} alt="" />
          </NavLink>
        </div>
        <div>
          {el.name}
        </div>
        <div>
          {el.status}
        </div>
        <div>
          {el.followed ? <button onClick={() => follow(el.id)}>Follow</button> : <button onClick={() => unfollow(el.id)}>Unfollow</button>}
        </div>
      </div>
      )}
    </div>}

  </div>
  )
}