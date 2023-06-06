import { connect } from "react-redux"
import { Navigate } from "react-router-dom"

export const withRedirectComponent = (Component) => {

  let wrapperComponent = (props) => {
    if (!props.isAuth) return <Navigate to="/login" />

    return <Component {...props} />
  }

  const mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
  }

  return connect(mapStateToProps, {})(wrapperComponent)
}