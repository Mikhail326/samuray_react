import React from 'react'
import axios from 'axios'
import style from './Users.module.css'
import userPhoto from '../../img/userPhoto.png'

export class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setAllUsers(res.data.totalCount)
      })
  }

  selectedUsersPage = (page) => {
    this.props.setUsersPage(page)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then(res => {
        this.props.setUsers(res.data.items)
      })
  }

  render() {

    let countPage = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    let arrPagesCount = []

    for (let i = 1; i <= countPage; i++) {
      arrPagesCount.push(i)
    }

    return <div>
      <div className={style.pagination}>
        {arrPagesCount.map(el => {
          return <span onClick={() => { this.selectedUsersPage(el) }} className={this.props.selectedPage === el && style.selectedPage}>{el}</span>
        })}
      </div>
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