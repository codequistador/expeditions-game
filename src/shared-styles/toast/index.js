import React from 'react'
import { RenderIcon } from '../../util'
import { ToastWrapper } from './styles'

class Toast extends React.Component {
  render() {
    const { children, variant } = this.props
    const Icon = RenderIcon(variant)

    return (
      <ToastWrapper variant={variant}>
        <Icon />
        {children}
      </ToastWrapper>
    )
  }
}

export default Toast
