import style from './Users.module.css'
import userPhoto from '../../img/userPhoto.png'
import preloader from '../../img/preloader.gif'
import { NavLink } from 'react-router-dom'
import { followAPI, unfollowAPI } from '../../api/api'

export const Users = ({ totalUsersCount, pageSize, selectedUsersPage, selectedPage, users, follow, unfollow, statusPreloader, following, followingProgress}) => {
  let countPage = Math.ceil(totalUsersCount / pageSize)
  let arrPagesCount = []
 console.log(following)
  for (let i = 1; i <= countPage; i++) {
    arrPagesCount.push(i)
  }

  return (<div>
    {statusPreloader ? <div className={style.preloader}>
      <img src={preloader} alt="" />
    </div> : <div>
      <div className={style.pagination}>
        {arrPagesCount.map(u => {
          return <span key={u} onClick={() => selectedUsersPage(u)} className={selectedPage === u && style.selectedPage}>{u}</span>
        })}
      </div>
      {users.map(u => <div key={u.id}>
        <div className={style.photo}>
          <NavLink to={`/profile/${u.id}`}>
            <img src={u.photos.small == null ? userPhoto : u.photos.small} alt="" />
          </NavLink>
        </div>
        <div>
          {u.name}
        </div>
        <div>
          {u.status}
        </div>
        <div>
          {u.followed ? <button disabled={following.some(el=> el === u.id )} onClick={() => {
            followingProgress(true, u.id)
            unfollowAPI(u.id)
              .then(data => {
                if (data.resultCode === 0) {
                  unfollow(u.id)
                }
                followingProgress(false, u.id)
              })
          }}>Unfollow</button> : <button disabled={following.some(el=> el === u.id )} onClick={() => {
            followingProgress(true, u.id)
            followAPI(u.id)
              .then(data => {
                if (data.resultCode === 0) {
                  follow(u.id)
                }
                followingProgress(false, u.id)
              })
          }}>Follow</button>}
        </div>
      </div>
      )}
    </div>}

  </div>
  )
}