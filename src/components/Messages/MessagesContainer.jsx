import { Messages } from './Messages'
import { addMessageActionCreator } from '../../redux/messages-reducer'
import { connect } from 'react-redux'
import { withRedirectComponent } from '../../hoc/withRedirectComponent'
import { compose } from 'redux'


let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddMessage: (message) => {
      dispatch(addMessageActionCreator(message))
    }
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRedirectComponent)(Messages)