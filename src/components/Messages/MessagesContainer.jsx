import { Messages } from './Messages'
import { onChangeMessageTextActionCreator, addMessageActionCreatot } from '../../redux/messages-reducer'
import { connect } from 'react-redux'
import { withRedirectComponent } from '../../hoc/withRedirectComponent'


let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onChangeValue: (text) => {
            dispatch(onChangeMessageTextActionCreator(text))
        },
        onAddMessage: () => {
            dispatch(addMessageActionCreatot())
        }
    }
}


const RedirectComponent = withRedirectComponent(Messages)

export const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(RedirectComponent)