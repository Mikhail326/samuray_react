import { Messages } from './Messages'
import { onChangeMessageTextActionCreator, addMessageActionCreatot } from '../../redux/messages-reducer'

export const MessagesContainer = ({ store }) => {

    const state = store.getState().messagesPage

    const onChangeValue = (text) => {
        store.dispatch(onChangeMessageTextActionCreator(text))
    }

    const onAddMessage = () => {
        store.dispatch(addMessageActionCreatot())
    }

    return (
       <Messages state={state} onChangeValue={onChangeValue} onAddMessage={onAddMessage}/>
    )
}