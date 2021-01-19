import React from 'react'
import Switch from '@material-ui/core/Switch'
import EditIcon from '@material-ui/icons/Edit'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { NameWrapper, PlayerWrapper } from './styles'
import { Button, FlexWrapper } from '../../shared-styles'

class Player extends React.Component {
  state = {
    isEditingName: false,
    name: this.props.name,
  }

  handleStartNameEdit = () => {
    this.setState({ isEditingName: true })
    setTimeout(
      function () {
        this.nameInput.focus()
      }.bind(this),
      100
    )
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
      <PlayerWrapper>
        <span className="you-or-opponent">{isMe ? 'You' : 'Opponent'}</span>
        {this.state.isEditingName ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              ref={(input) => (this.nameInput = input)}
            />
            <Button type="submit">Save</Button>
          </form>
        ) : (
          <NameWrapper>
            <span>{name}</span>
            {isMe && (
              <Tooltip title="Edit Name">
                <IconButton
                  size="small"
                  onClick={this.handleStartNameEdit}
                  color="inherit"
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            )}
          </NameWrapper>
        )}
        <FlexWrapper direction="column" align="center" justify="center">
          <Switch
            value={id}
            color="primary"
            checked={ready}
            onChange={onPlayerReady}
            disabled={!isMe}
          />
          <div>{ready ? 'Ready' : 'Not Ready'}</div>
        </FlexWrapper>
      </PlayerWrapper>
    )
  }
}

export default Player
