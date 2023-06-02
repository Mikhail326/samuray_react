import React from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'
import { setAuthUserData, authMe } from '../../redux/auth-reducer'

class HeaderComponent extends React.Component {

  componentDidMount() {
    this.props.authMe()
  }

  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export const HeaderContainer = connect(mapStateToProps, { setAuthUserData, authMe })(HeaderComponent)