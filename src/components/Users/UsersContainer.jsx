import React from 'react'
import axios from 'axios'
import { Users } from './Users'
import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC, setUsersPageAC,countAllUsersAC } from "../../redux/users-reducer"

export class UsersComponent extends React.Component {

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
  
    render() { return <Users totalUsersCount = {this.props.totalUsersCount}  
      pageSize = {this.props.pageSize}
      selectedUsersPage = {this.selectedUsersPage}
      selectedPage = {this.props.selectedPage}
      users = {this.props.users}
      follow = {this.props.follow}
      unfollow = {this.props.unfollow}
      />
    }
  }

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        selectedPage: state.usersPage.selectedPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => {
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setUsersPage: (selectedPage) => {
            dispatch(setUsersPageAC(selectedPage))
        },
        setAllUsers: (totalUsers) => {
            dispatch(countAllUsersAC(totalUsers))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)