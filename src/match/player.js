import React from 'react'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'

class Player extends React.Component {
  state = {
    isEditingName: false,
  }

  handleStartNameEdit = () => {
    this.setState({ isEditingName: true })
  }

  render() {
    const {
      id,
      name,
      isMe,
      ready,
      onPlayerReady,
      onUpdateName,
      savedName,
    } = this.props

    return (
      <div>
        {this.state.isEditingName ? (
          <TextField
            label="Your Name"
            defaultValue={name}
            variant="outlined"
            onBlur={() => this.setState({ isEditingName: false })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                this.setState({ isEditingName: false })
              }
            }}
            onChange={onUpdateName}
            helperText={savedName && 'Saved'}
            disabled={!isMe}
          />
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
