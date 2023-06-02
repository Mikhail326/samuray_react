import React from 'react'
import { Users } from './Users'
import { connect } from "react-redux"
import { follow, unfollow, followingProgress, getUsers, selectedUsersPage } from "../../redux/users-reducer"

class UsersComponent extends React.Component {

  componentDidMount() {
    this.props.getUsers(this.props.selectedPage, this.props.pageSize)
  }

  selectedUsersPage = (page) => {
    this.props.selectedUsersPage(page, this.props.pageSize)
  }

  render() {
    return <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      selectedUsersPage={this.selectedUsersPage}
      selectedPage={this.props.selectedPage}
      users={this.props.users}
      follow={this.props.follow}
      unfollow={this.props.unfollow}
      statusPreloader={this.props.statusPreloader}
      following={this.props.following}
      followingProgress={this.props.followingProgress}
    />
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    selectedPage: state.usersPage.selectedPage,
    statusPreloader: state.usersPage.statusPreloader,
    following: state.usersPage.following
  }
}

export const UsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  followingProgress,
  getUsers,
  selectedUsersPage
})(UsersComponent)