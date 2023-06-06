import React from 'react'
import { Profile } from "./Profile";
import { connect } from "react-redux"
import { useParams } from 'react-router-dom';
import { setUserProfile, getProfile } from "../../redux/profile-reducer"
import { withRedirectComponent } from '../../hoc/withRedirectComponent';
import { compose } from 'redux';

export function withRouter(Component) {
  return (props) => {
    const match = { params: useParams() };
    return <Component {...props} match={match} />
  }
}

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.id
    if (!userId) {
      userId = 2
    }
    this.props.getProfile(userId)
  }

  render() {
    return (
      <Profile profile={this.props.profile} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose(connect(mapStateToProps, { setUserProfile, getProfile }), withRouter, withRedirectComponent)(ProfileContainer)

// ----------- compose заменяет последовательность функций с права на лево. В самый правый вызов мы закидываем самую внутреннюю компоненту, с которой будут
//   происходить по порядку с права на лево все вызовы функций -----------------

// const RedirectComponent = withRedirectComponent(ProfileComponent)

// const WithRouterProfile = withRouter(RedirectComponent)

// export const ProfileContainer = connect(mapStateToProps, { setUserProfile, getProfile })(WithRouterProfile)
