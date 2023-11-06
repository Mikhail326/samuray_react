import React from 'react'
import { Navigate } from 'react-router-dom'
import { LoginReduxForm } from './LoginForm'

export const Login = (props) => {
  const onSubmit = (formData) => {
    const { login, password, rememberMe } = formData
    props.login(login, password, rememberMe)
  }

  if (props.isAuth) {
    return <Navigate to='/profile' />
  }

  return (
    <>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}