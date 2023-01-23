import style from './Users.module.css'
import userPhoto from '../../img/userPhoto.png'

export const Users = ({totalUsersCount, pageSize, selectedUsersPage, selectedPage, users, follow, unfollow} ) => {
    let countPage = Math.ceil(totalUsersCount / pageSize)
    let arrPagesCount = []

    for (let i = 1; i <= countPage; i++) {
      arrPagesCount.push(i)
    }

    return (  <div>
      <div className={style.pagination}>
        {arrPagesCount.map(el => {
          return <span key={el} onClick={() => selectedUsersPage(el)} className={selectedPage === el && style.selectedPage}>{el}</span>
        })}
      </div>
      {users.map(el => <div key={el.id}>
        <div className={style.photo}>
          <img src={el.photos.small == null ? userPhoto : el.photos.small} alt="" />
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
    </div>
    )
}