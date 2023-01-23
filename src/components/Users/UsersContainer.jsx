import { connect } from "react-redux"
import { followAC, setUsersAC, unfollowAC, setUsersPageAC,countAllUsersAC } from "../../redux/users-reducer"
import { Users } from "./Users"

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

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)