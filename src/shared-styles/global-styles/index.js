import { createGlobalStyle } from 'styled-components'
import { colors } from '../../shared-styles'

const GlobalStyles = createGlobalStyle`  
  * {
    box-sizing: border-box;
  }

  body {
    background: #e9ecef;
    color: ${colors.navy};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.navy};
  }
`

export default GlobalStyles
