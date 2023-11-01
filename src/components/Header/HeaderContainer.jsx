import React from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'
import { setAuthUserData, authMe, logout } from '../../redux/auth-reducer'

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
    id: state.authPage.id,
    email: state.authPage.email,
    login: state.authPage.login,
    isAuth: state.authPage.isAuth
  }
}

export const HeaderContainer = connect(mapStateToProps, { setAuthUserData, authMe, logout })(HeaderComponent)