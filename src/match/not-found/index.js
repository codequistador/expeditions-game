import React from 'react'
import { Link } from 'react-router-dom'

function GameNotFoundView() {
  return (
    <div>
      Sorry! This game does not exist.
      <br />
      <Link to="/">Create a new one</Link>
    </div>
  )
}

export default GameNotFoundView
