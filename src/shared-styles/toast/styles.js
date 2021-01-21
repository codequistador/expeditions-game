import styled, { keyframes } from 'styled-components'
import { colors } from '../../shared-styles'

const enterFromBottom = keyframes`
  0% {
    bottom: -60px;
    opacity: 0
  }
  100% {
    bottom: 16px;
    opacity: 1;
  }
`

export const ToastWrapper = styled.div`
  width: 318px;
  background: ${colors.red};
  padding: 8px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 16px;
  animation: 200ms ${enterFromBottom} ease-out;

  & svg {
    margin-right: 8px;
  }
`
