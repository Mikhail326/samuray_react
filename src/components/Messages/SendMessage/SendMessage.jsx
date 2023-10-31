import { Field, reduxForm } from "redux-form"

export const SendMessage = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name='text'></Field>
      <button>Add message</button>
    </form>
  )
}

export const MessageReduxForm = reduxForm({ form: 'message' })(SendMessage)
