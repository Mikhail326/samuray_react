import style from './Users.module.css'
import userPhoto from '../../img/userPhoto.png'
import preloader from '../../img/preloader.gif'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

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
          <NavLink to={`/profile/${el.id}`}>
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
          {el.followed ? <button onClick={() => {
            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {
              withCredentials: true,
              headers: { 'API-KEY': 'd313df37-06a3-4e7a-aed0-1c4f232d7812' }
            })
              .then(res => {
                if (res.resultCode === 0) {
                  unfollow(el.id)
                }
              })
          }}>Unfollow</button> : <button onClick={() => {
            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${el.id}`, {}, {
              withCredentials: true,
              headers: { 'API-KEY': 'd313df37-06a3-4e7a-aed0-1c4f232d7812' }
            })
              .then(res => {
                if (res.resultCode === 0) {
                  follow(el.id)
                }
              })
          }}>Follow</button>}
        </div>
      </div>
      )}
    </div>}

  </div>
  )
}