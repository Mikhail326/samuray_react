import React from 'react'
import axios from 'axios'
import style from './Users.module.css'
import userPhoto from '../../img/userPhoto.png'

export class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(res => {
        this.props.setUsers(res.data.items)
      })
  }

  render () {
    return <div>
      {this.props.users.map(el => <div key={el.id}>
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
          {el.followed ? <button onClick={() => this.props.follow(el.id)}>Follow</button> : <button onClick={() => this.props.unfollow(el.id)}>Unfollow</button>}
        </div>
      </div>
      )}
    </div>
}
}