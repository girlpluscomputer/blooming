import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: `'Apercu Pro', sans-serif`,
    body: `'Apercu Pro', sans-serif`
  },
  textStyles: {
    h2: {
      fontSize: '24px'
    },
    caption: {
      fontSize: '16px',
      fontWeight: 'bold'
    }
  },
  colors: {
    primary: '#162342',
    black: '#000000',
    green: '#B1D5AF',
    blue: '#5274C7',
    white: '#ffffff',
    gray: '#808192',
    lightGray: '#AAAAAA',
    grayBorder: 'rgba(128, 129, 146, 0.1)',
    background: '#EFEFEF'
  }
})
