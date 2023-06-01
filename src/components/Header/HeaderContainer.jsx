import React from 'react'
import { connect } from 'react-redux'
import { Header } from './Header'
import { setAuthUserData } from '../../redux/auth-reducer'
import { authMeAPI } from '../../api/api'

class HeaderComponent extends React.Component {

  componentDidMount() {
    authMeAPI()
      .then(data => {
        if (data.resultCode === 0) {
          this.props.setAuthUserData(data.data)
        }
      })
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

export const HeaderContainer = connect(mapStateToProps, { setAuthUserData })(HeaderComponent)