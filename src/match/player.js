import React from 'react'
import Switch from '@material-ui/core/Switch'

class Player extends React.Component {
  state = {
    isEditingName: false,
    name: this.props.name,
  }

  handleStartNameEdit = () => {
    this.setState({ isEditingName: true })
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    this.setState({ isEditingName: false })
    this.props.onUpdateName(event)
  }

  render() {
    const { id, name, isMe, ready, onPlayerReady } = this.props

    return (
      <div>
        {this.state.isEditingName ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <button type="submit">Update Name</button>
          </form>
        ) : (
          <div>
            {name}
            {isMe && ' - You'}{' '}
            {isMe && (
              <button onClick={this.handleStartNameEdit}>Edit Name</button>
            )}
          </div>
        )}

        <div>
          <Switch
            value={id}
            color="primary"
            checked={ready}
            onChange={onPlayerReady}
            disabled={!isMe}
          />{' '}
          - {ready ? 'Ready' : 'Not Ready'}
        </div>
      </div>
    )
  }
}

export default Player
