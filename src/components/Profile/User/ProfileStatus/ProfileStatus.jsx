import React from 'react'

export class ProfileStatus extends React.Component {

  state = {
    editMode: false
  }

  editModeHandler = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  render() {
    return <div>
      {this.state.editMode ? <input onBlur={this.editModeHandler} type="text" /> : <p onDoubleClick={this.editModeHandler}>Hello world!!!</p>}
    </div>
  }
}