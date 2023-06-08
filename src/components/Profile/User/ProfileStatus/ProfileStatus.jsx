import React from 'react'

export class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    text: this.props.status
  }

  activeEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
    this.props.updateStatus(this.state.text)
  }

  onChangeText =(e) => {
    this.setState({
      text: e.currentTarget.value
    })
  }

componentDidUpdate(prevProps, prevState) {
   if(prevProps.status !== this.props.status) {
     this.setState({
       status: this.props.status
     })
   }
}

  render() {
    return <div>
      {this.state.editMode ? <input  onChange={this.onChangeText}
      value={this.state.text} 
      onBlur={this.deactivateEditMode} 
      autoFocus
      type="text" /> : <p onDoubleClick={this.activeEditMode}>{this.state.text}</p>}
    </div>
  }
}