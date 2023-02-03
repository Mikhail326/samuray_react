import React from 'react'
import { Profile } from "./Profile";
import { connect } from "react-redux"
import axios from 'axios'
import { setUserProfile } from "../../redux/profile-reducer"

class ProfileComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(res => {
        this.props.setUserProfile(res.data)
      })
  }

  render() {
    return (
      <Profile profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}

export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileComponent)
