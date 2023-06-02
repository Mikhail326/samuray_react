import React from 'react'
import { Users } from './Users'
import { connect } from "react-redux"
import { follow, setUsers, unfollow, setUsersPage, countAllUsers, toggleStatusPreloader, followingProgress } from "../../redux/users-reducer"
import { getUsersAPI } from '../../api/api'

class UsersComponent extends React.Component {

    componentDidMount() {
        this.props.toggleStatusPreloader(true)
        getUsersAPI(this.props.selectedPage, this.props.pageSize)
            .then(data => {
                this.props.toggleStatusPreloader(false)
                this.props.setUsers(data.items)
                this.props.countAllUsers(data.totalCount)
            })
    }

    selectedUsersPage = (page) => {
        this.props.toggleStatusPreloader(true)
        this.props.setUsersPage(page)
        getUsersAPI(page, this.props.pageSize)
            .then(data => {
                this.props.toggleStatusPreloader(false)
                this.props.setUsers(data.items)
            })
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
    setUsers,
    setUsersPage,
    countAllUsers,
    toggleStatusPreloader,
    followingProgress
})(UsersComponent)