import { Field, reduxForm } from "redux-form"

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component={'textarea'} name={'text'} />
      <button>Add Post</button>
    </form>
  )
}

export const PostsReduxForm = reduxForm({ form: 'posts' })(PostsForm)