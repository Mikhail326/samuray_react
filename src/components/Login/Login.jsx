import React from 'react'
import { LoginReduxForm } from './LoginForm'

export const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData)
  }
  return (
    <>
      <h2>Login</h2>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}