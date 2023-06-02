import React from 'react'
import { Profile } from "./Profile";
import { connect } from "react-redux"
import { Navigate, useParams } from 'react-router-dom';
import { setUserProfile, getProfile } from "../../redux/profile-reducer"

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />
  }
}

class ProfileComponent extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.id
    if (!userId) {
      userId = 2
    }
    this.props.getProfile(userId)
  }

  render() {

    if(!this.props.isAuth) return <Navigate  to="/login" />

    return (
      <Profile profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
  }
}

const WithRouterProfile = withRouter(ProfileComponent)

export const ProfileContainer = connect(mapStateToProps, { setUserProfile, getProfile })(WithRouterProfile)
