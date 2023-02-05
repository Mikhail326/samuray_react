import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Header } from './Header'
import { setAuthUserData } from '../../redux/auth-reducer'

class HeaderComponent extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
    .then(res => {
      if(res.data.resultCode === 0) {
        this.props.setAuthUserData(res.data.data)
      }
    })
  }

  render() {
    return <Header {...this.props}/>
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