import { connect } from "react-redux"
import { login, logout } from "../../redux/auth-reducer"
import { Login } from "./Login"

const mapStateToProps = (state) => {
  return {
    isAuth: state.authPage.isAuth
  }
}

export const LoginContainer = connect(mapStateToProps, { login, logout })(Login)