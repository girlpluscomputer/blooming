import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  textStyles: {
    h2: {
      fontSize: '24px'
    },
    caption: {
      fontSize: '16px'
    }
  },
  colors: {
    primary: '#162342',
    black: '#000000',
    green: '#B1D5AF',
    white: '#ffffff',
    gray: '#808192',
    background: '#EFEFEF'
  }
})
