import axios from 'axios'
import style from './Users.module.css'
import userPhoto from '../../img/userPhoto.png'

export const Users = ({ follow, unfollow, setUsers, users }) => {

  if (users.length === 0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        setUsers(res.data.items)
      })
  }

  return (
    <div>
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