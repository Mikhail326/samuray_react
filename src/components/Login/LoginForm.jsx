import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={'input'} type={"text"} name={'login'} placeholder={'login'} />
      </div>
      <div>
        <Field component={'input'} type={"text"} name={'password'} placeholder={'password'} />
      </div>
      <div>
        <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> <span>remember Me</span>
      </div>
      <div>
        <button type={'submit'}>Отправить</button>
      </div>
    </form>
  )
}

export const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)